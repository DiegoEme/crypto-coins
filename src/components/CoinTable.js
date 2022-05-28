import { useNavigate } from "react-router-dom";

function CoinTable({ coins }) {
  const navigate = useNavigate();
  const handleOnclick = (coinId) => {
    navigate(`/${coinId}`);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
          <th>24h %</th>
          <th>7d %</th>
          <th>Market Cap</th>
        </tr>
      </thead>
      <tbody style={{ fontWeight: "500" }}>
        {coins.length > 0
          ? coins.map((coin, index) => {
              return (
                <tr key={index} onClick={() => handleOnclick(coin.id)}>
                  <td>{coin.rank}</td>
                  <td>{coin.name}</td>
                  <td>${coin.price.toFixed(2)}</td>
                  <td
                    style={
                      coin.priceChange1d < 0
                        ? { color: "#ea3943", fontWeight: "bold" }
                        : { color: "#16c784", fontWeight: "bold" }
                    }
                  >
                    {coin.priceChange1d}%
                  </td>
                  <td
                    style={
                      coin.priceChange1w < 0
                        ? { color: "#ea3943", fontWeight: "bold" }
                        : { color: "#16c784", fontWeight: "bold" }
                    }
                  >
                    {coin.priceChange1w}%
                  </td>
                  <td>${coin.marketCap}</td>
                </tr>
              );
            })
          : null}
      </tbody>
    </table>
  );
}

export default CoinTable;
