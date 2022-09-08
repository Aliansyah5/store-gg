import Category from "./category";
import TableRow from "./tablerow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={1800500} icon="ic-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={8455000} icon="ic-mobile">
                Game
                <br />
                Mobile
              </Category>
              <Category nominal={5000000} icon="ic-desktop">
                Other
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="Mobile Legend"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                  images="overview-1"
                />
                <TableRow
                  title="Call of Duty:Modern"
                  category="Desktop"
                  item={200}
                  price={740000}
                  status="Success"
                  images="overview-2"
                />
                <TableRow
                  title="Clash Of Clan"
                  category="Mobile"
                  item={200}
                  price={120000}
                  status="Success"
                  images="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  category="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                  images="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
