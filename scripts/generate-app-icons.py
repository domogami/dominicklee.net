"""Render the hand-authored pocket-app logos and their light-paper variants.

Uses only Python's standard library and rsvg-convert. The SVGs contain no fonts,
network references, or platform-dependent emoji. Full-bleed paper and centered
marks let iOS and Android apply their own icon shapes.
"""
from pathlib import Path
from copy import deepcopy
import shutil
import subprocess
import xml.etree.ElementTree as ET

root = Path(__file__).resolve().parent.parent
renderer = shutil.which('rsvg-convert')
if not renderer:
    raise SystemExit('Install librsvg (rsvg-convert) to regenerate these assets.')

light_colors = {
    '#2b3034': '#efe7d7',
    '#efe7d7': '#252b2e',
    '#354346': '#dbe5d5',
    '#2f3b3f': '#e3e8da',
    '#b6cf8e': '#0e7c79',
    '#e6d6a4': '#ecc16e',
}
ET.register_namespace('', 'http://www.w3.org/2000/svg')
for app in ['weather', 'calculator']:
    output = root / 'public' / app
    source = output / 'icon.svg'
    dark = source.read_text()
    (output / 'icon-dark.svg').write_text(dark)
    light = ET.fromstring(dark)
    for element in light.iter():
        for attribute in ['fill', 'stroke']:
            if element.get(attribute) in light_colors:
                element.set(attribute, light_colors[element.get(attribute)])
        if element.tag.endswith('title'):
            element.text = element.text.replace('dark dot paper', 'light dot paper')
    (output / 'icon-light.svg').write_text(ET.tostring(light, encoding='unicode') + '\n')
    for filename, size in [
        ('icon-192.png', 192),
        ('icon-512.png', 512),
        ('icon-maskable.png', 512),
        ('apple-touch-icon.png', 180),
        ('icon-dark-1024.png', 1024),
    ]:
        subprocess.run([renderer, '-w', str(size), '-h', str(size), str(source), '-o', str(output / filename)], check=True)
    subprocess.run([renderer, '-w', '1024', '-h', '1024', str(output / 'icon-light.svg'), '-o', str(output / 'icon-light-1024.png')], check=True)
    social_source = output / 'social.svg'
    if social_source.exists():
        ns = '{http://www.w3.org/2000/svg}'
        social = ET.parse(social_source)
        artwork = social.getroot().find(f"{ns}g[@transform='translate(735 100) scale(.85)']")
        mark = light.find(f"{ns}g[@id='icon-mark']")
        if artwork is None or mark is None:
            raise SystemExit(f'Missing vector artwork group in {app} social card.')
        for child in list(artwork):
            artwork.remove(child)
        artwork.append(deepcopy(mark))
        social.write(social_source, encoding='unicode')
        subprocess.run([renderer, str(social_source), '-o', str(output / 'social.png')], check=True)
    print(f'Generated {app}: dark home-screen icons, plus dark/light SVG and 1024px PNG.')
