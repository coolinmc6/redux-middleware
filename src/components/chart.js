// class or function based component?  No state is needed and this doesn't need
// to touch Redux SOOOO it will be a function-based component
// Sparklines library was pretty straightforward BUT for some reason, my charts cascaded from left to
// right, getting smaller with each iteration
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>{average(props.data)} {props.units}</div>
		</div>
	)
}
