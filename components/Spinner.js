import { CubeGrid } from "styled-loaders-react";

const Spinner = () => (
    <div className="bg-dark-200">
        <div className="container p-6 bg-dark-200">
            <div className="loader">
                <div className="cube">
                    <CubeGrid color="#F12A41" />
                </div>
            </div>
        </div>
    </div>
);

export default Spinner