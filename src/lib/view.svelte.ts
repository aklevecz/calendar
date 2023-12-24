enum View {
    Calendar,
    List
}

function createView() {
    let view = $state({app:View.List, month:new Date().getMonth(), year: new Date().getFullYear()})

    return {
        get view() {
            return view.app;
        },
        changeView(newView:View) {
            view.app = newView;
        },
        get month() {
            return view.month;
        },
        incrementMonth() {
            if (view.month >= 11) {
                view.year = view.year + 1
                view.month = 0
            } else {
            view.month = view.month + 1
            }
        },
        decrementMonth() {
            if (view.month <= 0) {
                view.year = view.year - 1
                view.month = 11
            } else{
            
            view.month = view.month - 1}
        },
        get year() {
            return view.year;
        }
    }
}

export default createView();
export { View }