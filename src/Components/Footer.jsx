import Group from '../assets/Group.png';

const Footer = () => {
    return (
        <div>
            <div>
                <img src={Group} />
                <h1>Copyright by 2019 Dev, Inc</h1>
            </div>

            <div>
                <h1>Home</h1>
                <h1>Adversite</h1>
                <h1>Supports</h1>
                <h1>Marketing</h1>
                <h1>FAQ</h1>
            </div>
        </div>
    );
};

export default Footer;