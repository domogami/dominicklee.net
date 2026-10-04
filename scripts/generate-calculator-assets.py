"""Regenerate vector social artwork and home-screen PNGs.
Requires fonttools[woff] and rsvg-convert; runtime app needs neither.
Fonts stay under their existing SIL Open Font Licenses in public/fonts.
"""
from pathlib import Path
import shutil
import subprocess
from fontTools.ttLib import TTFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

root = Path(__file__).resolve().parent.parent
output = root / 'public/calculator'
renderer = shutil.which('rsvg-convert')
if not renderer:
    raise SystemExit('Install librsvg (rsvg-convert) to regenerate these assets.')

def lettering(text, filename, size, x, baseline, color, spacing=0):
    font = TTFont(root / 'public/fonts' / filename)
    glyphs = font.getGlyphSet()
    scale = size / font['head'].unitsPerEm
    paths = []
    for char in text:
        glyph = glyphs[font.getBestCmap()[ord(char)]]
        pen = SVGPathPen(glyphs, ntos=lambda n: f'{n:.2f}'.rstrip('0').rstrip('.'))
        glyph.draw(TransformPen(pen, (scale, 0, 0, -scale, x, baseline)))
        paths.append(f'<path d="{pen.getCommands()}"/>')
        x += glyph.width * scale + spacing
    return f'<g fill="{color}">' + ''.join(paths) + '</g>'

title = lettering('Calculator.', 'f9cc56a6-1dc1-4ab8-a185-6fb759ffba46.woff2', 65, 72, 302, '#252b2e', -2.3)
note = lettering('A little room to work things out.', '63f1500a-21ec-43d9-bf02-b5d2a42af2a7.woff2', 39, 77, 361, '#0e7c79')
meta = lettering('DOM’S NOTEBOOK / FIELD NOTES', 'bc027d93-df99-4e41-94fa-f8a3846d91f7.woff2', 14, 75, 99, '#666b65', 1)
footer = lettering('dominicklee.net/calculator', 'bc027d93-df99-4e41-94fa-f8a3846d91f7.woff2', 14, 75, 552, '#666b65')
art = (output / 'icon.svg').read_text().split('<rect width="512" height="512" fill="url(#dots)"/>')[1].rsplit('</svg>', 1)[0]
social = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<defs><pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse"><circle cx="16" cy="16" r="1" fill="#252b2e" opacity=".16"/></pattern></defs>
<rect width="1200" height="630" fill="#efe7d7"/><rect width="1200" height="630" fill="url(#dots)"/>
<path d="M42 0V630" stroke="#a34e36" opacity=".2"/>
{meta}{title}{note}{footer}<g transform="translate(735 100) scale(.85)">{art}</g>
</svg>'''
(output / 'social.svg').write_text(social)
for filename, size in [('icon-192.png', 192), ('icon-512.png', 512), ('icon-maskable.png', 512), ('apple-touch-icon.png', 180)]:
    subprocess.run([renderer, '-w', str(size), '-h', str(size), str(output / 'icon.svg'), '-o', str(output / filename)], check=True)
subprocess.run([renderer, str(output / 'social.svg'), '-o', str(output / 'social.png')], check=True)
print('Generated calculator icons and 1200 × 630 social artwork.')
