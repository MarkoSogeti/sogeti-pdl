import {  Portal } from "solid-js/web";
import {createSignal, Show} from "solid-js";


function CheckSmall(props) {


    return (
        <svg class="check_small" width="50px" height="50px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                {/* <circle id="filled-circle" fill="#78B348" cx="66.5" cy="66.5" r="54.5"></circle> */}
                <circle id="filled-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle>
                {/* <circle id="outline" stroke="#78B348" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle> */}
                {/* <polyline id="check" stroke="#78B348" stroke-width="4" points="41 70 56 85 92 49"></polyline> */}
                <polyline id="check" stroke="#78B348" stroke-width="5" points="41 70 56 85 92 49"></polyline>
            </g>
        </svg>
    );
}

export default CheckSmall;
