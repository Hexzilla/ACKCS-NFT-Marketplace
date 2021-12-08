import React from 'react';
import env from "react-dotenv";
const web3 = require("@solana/web3.js");
const { PublicKey } = require("@solana/web3.js");

const useViewModel = () => {
    const [phantom, setPhantom] = React.useState(null);
    const [connected, setConnected] = React.useState(false);
    const [publicKey, setPublickKey] = React.useState(null);
    const [connection, setConnection] = React.useState(null);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        setTimeout(() => {
            if (window.hasOwnProperty("solana")) {
                setPhantom(window["solana"]);
            }
        }, 100);
    }, []);

    React.useEffect(() => {
        phantom?.on("connect", (res) => {
            setConnected(true);
            console.log("res--", res.toString());
            setPublickKey(res);
            getConnection();
        });

        phantom?.on("disconnect", () => {
            console.log("disconnect");
            setConnected(false);
            setPublickKey(null);
            setConnection(null);
        });
    }, [phantom]);

    const getConnection = () => {
        console.log('REACT_APP_RPC_URL', env.REACT_APP_RPC_URL)
        setConnection(
            new web3.Connection(env.REACT_APP_RPC_URL, "confirmed")
        );
    };

    const connectPhantom = React.useCallback(() => {
        phantom.connect();
    }, [phantom]);

    const disconnectHandler = React.useCallback(() => {
        phantom?.disconnect();
    }, [phantom]);

    return {
        connectPhantom
    }
};

export default useViewModel