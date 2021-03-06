import React, { Component } from 'react';

import TextWrap from './TextWrap';
import CheckWrap from './CheckWrap';

class Column extends Component {
  renderColumn(fields) {
    return fields.map(obj => {
      if (typeof obj.text === 'boolean') {
        return <CheckWrap key={obj.label} label={obj.label} check={obj.text} />;
      } else {
        const extra_text = obj.extra_text ? obj.extra_text : "";
        return <TextWrap key={obj.label} label={obj.label} text={obj.text} extra_text={extra_text} />;
      }
    });
  }

  render() {
    const fields = this.props.fields;
    return (
      <section className="column padded-content ">
        {this.renderColumn(fields)}
      </section>
    );
  }
}

export default Column;
