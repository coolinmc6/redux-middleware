// class or function based component?  No state is needed and this doesn't need
// to touch Redux SOOOO it will be a function-based component

import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
		</div>
	)
}