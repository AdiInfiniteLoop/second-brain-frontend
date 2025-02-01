
interface PlusIconInterface {
  size: string
}
// export const PlusIcon: React.FC<PlusIconInterface> = (props: PlusIconInterface) => {
//   return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`size-${props.size}`}>
//   <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
// </svg>

// } OR

export function PlusIcon(props: PlusIconInterface) {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`${props.size}` || `size-6`}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
}