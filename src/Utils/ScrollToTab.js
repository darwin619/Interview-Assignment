import $ from 'jquery';

export const ScrollToTab = ref => {
	const current = ref.current
	$("html, body").animate({ scrollTop: current.offsetTop }, "slow");
}