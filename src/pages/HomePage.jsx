import Flex from "../components/Flex";
import topImage from "../img/slogan.png";


export default function HomePage() {
  return (
    <Flex flexDirection="column">
      <Flex justifyContent="center" marginTop={50}>
        <img
          src={topImage}
          className="img-fluid"
          alt="Satoshi LIRA Cryptocurrecy Revolution"
          width={1920}
          style={{width: '90%', maxWidth: 1920}}
        />
      </Flex>
      <Flex justifyContent="center">
        <Flex width="50%">
          <div id="about-page">
            <br />
            <Flex justifyContent="center">
              <div>
                <h1>Building Satoshi LIRA Ecosystem...</h1>
              </div>
            </Flex>
            <br />
            <h3>
              Satoshi Lira is a revolutionary project whose protocol allows to
              generate profit from decentralized finance apps, acting as engine
              for the creation of a democratic ecosystem oriented towards
              political and economical freedom of its community.
            </h3>
          </div>


        </Flex>
        {/* <Flex flex={1} justifyContent="center" alignItems="center">
        <Flex flexDirection="column" width="30%">
          <Flex>
            <h1>Presale Supply</h1>
          </Flex>
          <Flex borderTop="1px solid white">
            <h1 >Total 900M LIRA</h1>
          </Flex>
          <Flex borderBottom="1px solid white">
            <h1>Left 223,050M LIRA</h1>
          </Flex>
          <Flex justifyContent="center" flex={1} marginTop="30px">
            <div className="button">Join Presale</div>
          </Flex>
        </Flex>
      </Flex> */}
      </Flex>
    </Flex>
  );
}
