const lastEvent = (events) => {
    if (!events) return undefined
    const last = events[events.length - 1]
    if (!last?.date) return last
    events.sort((evtA, evtB) =>
        new Date (evtA.date) > new Date (evtB.date) ? -1 : 1
    )
    return events[0]
}
export default lastEvent