import LenisScrollProvider from "./LenisScrollProvider";


interface Props extends React.PropsWithChildren{}

export default function Providers({children}: Props){
  return (
    <LenisScrollProvider>
      {children}
    </LenisScrollProvider>
  )
}