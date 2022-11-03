import {Tabs} from "antd";

require("./index.less")
import React, {Component} from "react";

class Activitytabslayout extends Component{
    render(){
        const onChange = (key) => {
            console.log(key);
        };
        return (
            <>
                <Tabs
                    onChange={onChange}
                    type="card"
                    items={new Array(3).fill(null).map((_, i) => {
                        const id = String(i + 1);
                        return {
                            label: `Tab ${id}`,
                            key: id,
                            children: `Content of Tab Pane ${id}`,
                        };
                    })}
                />

            </>
        )
    }
}
export default Activitytabslayout;

