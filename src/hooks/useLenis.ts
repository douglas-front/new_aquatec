import { useContext } from "react";
import { LenisScrollContext } from "../contexts/LenisScrollProvider";

export default function useLenisScroll(){
  return useContext(LenisScrollContext)
}