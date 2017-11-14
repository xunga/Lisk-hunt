import React, {Component} from 'react';

class Container extends Component {

    renderUrl(){
        const {url} = this.props;
        if (url){
            return <p><a href={url.url} rel="noopener noreferrer" target="_blank">{url.name}</a></p>
        }
    }

    render(){
        const {text, title} = this.props;
        return (
            <div className="newtolisk--section">
                <h2>{title}</h2>
                <p>{text}</p>
                {this.renderUrl()}
            </div>

        );
    }
};

export default Container;
