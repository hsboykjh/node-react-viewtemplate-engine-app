var React = require('react');
var HeaderComponent = require('../header');
var FooterComponent = require('../footer');
var NavbarComponent = require('../navbar');

class AuctionLayout extends React.Component {

    render() {
        return (
            <html>
            <head>
                <title>Admin</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body>
            <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
            <script type="text/javascript" dangerouslySetInnerHTML={{ __html: `
            // Initialize Firebase
            var config = {
                apiKey: "***************************",
                authDomain: "***************************",
                databaseURL: "***************************",
                projectId: "***************************",
                storageBucket: "***************************",
                messagingSenderId: "***************************"
            };
            firebase.initializeApp(config);

            // Get a reference to the database service
            var database = firebase.database();
            var auctionInfoRef = firebase.database().ref('auctionInfo');
            auctionInfoRef.on('value', function(snapshot) {
                console.log("auctionInfo : ",snapshot.val());

                document.getElementById("auction_no").innerHTML = "Auction No : " + snapshot.val().auction_no;
                document.getElementById("auction_status").innerHTML = "Status : " + snapshot.val().auction_status;
                document.getElementById("start_date").innerHTML = "Start Date : " + snapshot.val().start_date;
                document.getElementById("end_date").innerHTML = "End Date : " + snapshot.val().end_date;
                document.getElementById("end_time").innerHTML = "CountDown : " + snapshot.val().end_time;
            });

            var priceInfoRef = firebase.database().ref('price');
            priceInfoRef.on('value', function(snapshot) {
                var priceList = snapshot.val();
                console.log("price : ",priceList);

                var table = document.getElementById("priceTable");

                //delete all nodes
                while (table.firstChild) table.removeChild(table.firstChild);

                //create table header
                var tbody = document.createElement('tbody');
                var newTr = document.createElement('tr');

                var lot_no_th = document.createElement('th');
                lot_no_th.appendChild(document.createTextNode('Lot'));
                newTr.appendChild(lot_no_th);

                var highest_price_th = document.createElement('th');
                highest_price_th.appendChild(document.createTextNode('Highest Price'));
                newTr.appendChild(highest_price_th);

                var highest_user_id_th = document.createElement('th');
                highest_user_id_th.appendChild(document.createTextNode('User ID'));
                newTr.appendChild(highest_user_id_th);

                var reserve_th = document.createElement('th');
                reserve_th.appendChild(document.createTextNode('Reserve'));
                newTr.appendChild(reserve_th);

                var reserve_price_th = document.createElement('th');
                reserve_price_th.appendChild(document.createTextNode('Reserve Price'));
                newTr.appendChild(reserve_price_th);

                tbody.appendChild(newTr);
                table.appendChild(tbody);

                for(var index=0; index < priceList.length; index++){

                    var tr = document.createElement('tr');

                    var lot_no_td = document.createElement('td');
                    var lot_no = document.createTextNode(priceList[index].lot_no);
                    lot_no_td.appendChild(lot_no);
                    tr.appendChild(lot_no_td);

                    var highest_price_td = document.createElement('td');
                    var highest_price = document.createTextNode(priceList[index].highest_price);
                    highest_price_td.appendChild(highest_price);
                    tr.appendChild(highest_price_td);

                    var highest_user_id_td = document.createElement('td');
                    var highest_user_id = document.createTextNode(priceList[index].highest_user_id);
                    highest_user_id_td.appendChild(highest_user_id);
                    tr.appendChild(highest_user_id_td);

                    var reserve_td = document.createElement('td');
                    var reserve = document.createTextNode(priceList[index].reserve);
                    reserve_td.appendChild(reserve);
                    tr.appendChild(reserve_td);

                    var reserve_price_td = document.createElement('td');
                    var reserve_price = document.createTextNode(priceList[index].reserve_price);
                    reserve_price_td.appendChild(reserve_price);
                    tr.appendChild(reserve_price_td);

                    tbody.appendChild(tr);
                }
            });
            `}}></script>

            <div className="container">
                {/*<HeaderComponent></HeaderComponent>*/}
                <NavbarComponent user={this.props.user}></NavbarComponent>
                <h3>AuctionInfo</h3>
                <div>
                    <div id="auctionInfo">
                        <div id="auction_no"></div>
                        <div id="auction_status"></div>
                        <div id="start_date"></div>
                        <div id="end_date"></div>
                        <div id="end_time"></div>
                    </div>
                </div>

                <h3>Price Info</h3>
                <div className="table-responsive">
                    <table id="priceTable" className="table table-striped table-hover">
                    </table>
                </div>
                {this.props.children}
                <FooterComponent></FooterComponent>
            </div>
            </body>
            </html>
        );
    }
}

module.exports = AuctionLayout;