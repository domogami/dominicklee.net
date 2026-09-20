# One notebook, one page index

Folios identify destinations, not decorative page counts or positions on screen. A number is reused only when it points to the same destination. This includes desktop/mobile navigation and the matching section heading.

The first two entries preserve the website generations explicitly requested by Dom. The remaining existing projects complete that collection; the current notebook follows, then the linked garden resources. This is a stable index, not a claim about the creation dates of every project.

| Folio | Destination                      | Canonical link                                       |
| ----- | -------------------------------- | ---------------------------------------------------- |
| p.00  | My first website                 | https://doms-old-site.netlify.app/                   |
| p.01  | Previous portfolio               | /archive/portfolio/                                  |
| p.02  | Startpage                        | /startpage                                           |
| p.03  | Dotfiles repository              | https://github.com/domogami/.dotfiles                |
| p.04  | SNAP keyboard                    | https://nullbits.co/snap/                            |
| p.05  | Notebook introduction            | #top                                                 |
| p.06  | Collections                      | #works                                               |
| p.07  | Now & then                       | #now                                                 |
| p.08  | Garden introduction on this site | #garden                                              |
| p.09  | Contact                          | #contact                                             |
| p.10  | Axe Sharpening note              | https://domogami.github.io/blog-posts/axe-sharpening |
| p.11  | Dotfiles note                    | https://domogami.github.io/blog-posts/dotfiles       |
| p.12  | Digital garden website           | https://domogami.github.io/                          |

The source of truth is `app/components/notebook/pageIndex.ts`. New destinations get the next unused number; retain old assignments when moving or renaming content. Do not recycle a retired number. Timeline stage numbers are an ordered list of milestones, not folios.

The browser suite verifies unique numbers and canonical destinations, checks rendered references against the registry, and checks that numbered links go to the registered destination.
