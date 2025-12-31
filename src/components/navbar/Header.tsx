import { HeaderDesktop } from './HeaderDesktop'
import { HeaderMobile } from './HeaderMobile'
import { HeaderShell } from './HeaderShell'

export function Header() {
  return (
    <HeaderShell>
      <HeaderDesktop />
      <HeaderMobile />
    </HeaderShell>
  )
}
