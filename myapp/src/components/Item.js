import React from "react";


export default class Item extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <li>
                {item.id}) {item.title} {item.body}
            </li>
        )
    }

};

