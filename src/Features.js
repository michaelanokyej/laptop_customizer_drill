import React from "react";
import slugify from "slugify";
import SelectedInput from "./SelectedInput";

class Features extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = this.props.features[feature].map(item => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <SelectedInput
            itemHash={itemHash}
            key={itemHash}
            name={slugify(feature)}
            onChange={e => this.props.updateFeature(feature, item)}
            item={item}
            USCurrencyFormat={this.props.USCurrencyFormat}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    return features;
  }
}

export default Features;
