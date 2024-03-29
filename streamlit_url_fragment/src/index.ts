import {Streamlit} from "streamlit-component-lib"

const targetWindow: Window = window.parent;

const hashChangeHandler = () => {
    Streamlit.setComponentValue(targetWindow.location.hash)
}

targetWindow.addEventListener('hashchange', hashChangeHandler)
Streamlit.setComponentReady()
Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, hashChangeHandler)
Streamlit.setFrameHeight(0)
