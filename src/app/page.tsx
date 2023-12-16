import Image from 'next/image'
import Split from './components/Split'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Split Expenses',
  description: 'A expenses spliting app',
  keywords:'React expense calculator, group finance splitter, shared expense manager, budget division tool in React, expense sharing app, financial splitting solution, React cost divider, shared spending organizer, group budget calculator, expense distribution tool, cost-sharing platform in React, financial splitting app, shared cost calculator, group spending organizer, React finance splitter, expense allocation tool, group budget manager, cost division solution in React, shared expenses tracker, financial division app'

}
export default function Home() {
  return (
   <>
   <Split />
   </>
  )
}
