// Import:
import React, {Component} from "react";
import Pokedex from "../../components/Pokedex.js"


class Home extends Component {
  render() {
    return (
      <div  class="d-flex justify-content-center" id="wrapper">
        <div  class="col-6">
          <table class="table">
            <thead>
              <tr class="d-flex">
                <th class="col-1" scope="col">#</th>
                <th class="col-3" scope="col">Player</th>
                <th class="col-4" scope="col">

                </th>
                <th class="col-4" scope="col">Badges</th>
              </tr>
            </thead>

            <tbody>
              <tr class="d-flex">
                <th class="col-1" scope="row">1</th>
                <td class="col-3">Dave</td>
                <td class="col-4">
                  <Pokedex pokemon = {["gardevoir-mega", "cresselia"]} />
                </td>
                <td class="col-4">icon</td>
              </tr>
            </tbody>

            <tbody>
              <tr class="d-flex">
                <th class="col-1" scope="row">2</th>
                <td class="col-3">Dave</td>
                <td class="col-4">
                  <Pokedex pokemon = {["arceus"]} />
                </td>
                <td class="col-4">icon</td>
              </tr>
            </tbody>
          </table>
        </div> 
      </div>
    );
  }
}


export default Home