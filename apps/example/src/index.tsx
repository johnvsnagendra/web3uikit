import { Route, Routes } from 'react-router-dom';
import { lazily } from 'react-lazily';
import { Suspense } from 'react';

const { Button, Logo, Typography, Avatar, BannerStrip, VerifyCode } = lazily(
    () => import('@web3uikit/core'),
);
import { Ada } from '@web3uikit/icons';
const { ConnectButton, NFT } = lazily(() => import('@web3uikit/web3'));
export const App = () => {
    console.log(Ada);
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <Suspense fallback={<>Loading...</>}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                margin: '20px',
                            }}
                        >
                            <Ada
                                style={{ fontSize: '100px', color: 'black' }}
                            />
                            <Logo theme="default" color="white" />
                            <Button
                                size="large"
                                text="Large"
                                isFullWidth
                                theme="primary"
                            />
                            <Typography children="text" variant="h1" />
                            <Avatar theme="image" />
                            <BannerStrip
                                text="Hey this is a notification you should check out"
                                type="standard"
                            />
                            <VerifyCode />
                        </div>
                        <ConnectButton />
                        <NFT
                            address="0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB"
                            chain="eth"
                            fetchMetadata
                            tokenId="1"
                        />
                    </Suspense>
                }
            />
            <Route path="*" element={<>Not found...</>}></Route>
        </Routes>
    );
};
