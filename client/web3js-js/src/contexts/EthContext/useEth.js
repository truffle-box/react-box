import { useContext } from "react";
import EthContext from "./EthContext";

const useEth = () => useContext(EthContext);

export default useEth;
