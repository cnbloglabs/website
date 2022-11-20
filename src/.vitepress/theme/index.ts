import DefaultTheme from 'vitepress/theme'
import 'uno.css'
import './index.css'

function createDocumentFragment(template: string) {
  return document.createRange().createContextualFragment(template)
}

window.onload = function () {
  const _navBarContainer = document.querySelector('.VPNavBar>.container')
  _navBarContainer?.insertBefore(
    createDocumentFragment(
      '<div class="custom-logo flex items-center cursor-pointer"><span class="i-carbon:page-last inline-block text-lg"></span><span class="ml-2">Cnblog Labs</span></div>',
    ),
    _navBarContainer.firstChild,
  )
  document
    .querySelector('.custom-logo')
    ?.addEventListener('click', () => (location.href = '/'))
}

export default Object.assign(
  {},
  DefaultTheme,
)
