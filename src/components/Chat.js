import React ,{Component} from 'react'

export class Chat extends Component{
    componentDidMount(){
        (function(d, m){
            var kommunicateSettings = 
                //{"appId":"16623defd387c6fc6f89b5d720d1dbbdd","popupWidget":true,"automaticChatOpenOnNavigation":true};
                {"appId":"2a90319b5b41cd904003e027140119552","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }
    render() {
        return(
        <div>
             
        </div>
        )
    }
}

export default Chat