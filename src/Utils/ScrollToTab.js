export const ScrollToTab = ref => {
	window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' })
}