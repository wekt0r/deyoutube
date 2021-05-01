getIdsToRemove = () => {
    if (document.URL.includes("watch")){
        return ["comments", "secondary"];
    }
    if (document.URL.includes("results")){
        return []
    }
    return ["page-manager", "guide"];
}

doRemove = () => {
    const idsToRemove = getIdsToRemove()
    idsToRemove.forEach(
        id => {
            document.getElementById(id)?document.getElementById(id).remove():null
        }
    )
}

const config = { attributes: true, childList: true, subtree: true };
const obs = new MutationObserver(doRemove)
obs.observe(document, config);
