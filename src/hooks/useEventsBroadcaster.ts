export type UseEventsBroadcasterAPI = {
    subscribe: (event: any, fn: any) => void;
    unsubscribe: (event: any, fn: any) => void;
    broadcast: (event: any, data: any) => void;
}

const events: any[] = [];

export function useEventsBroadcaster(): UseEventsBroadcasterAPI {
    function subscribe(event: any, fn: any) {
        if (!events[event]) {
            events[event] = [];
        }
        events[event].push(fn);
    }

    function unsubscribe(event: any, fn: any) {
        if (!events[event]) return;
        events[event] = events[event].filter((cb: any) => cb !== fn);
    }

    function broadcast(event: any, data: any) {
        if (!events[event]) return;
        events[event].forEach((cb: any) => cb(data));
    }

    return ({ subscribe, unsubscribe, broadcast });
}
