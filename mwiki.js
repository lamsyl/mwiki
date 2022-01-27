const url = new URL(document.URL)

if (!url.href.includes('m.')) {
    document.location = url.href.replace('wiki', 'm.wiki')
}
