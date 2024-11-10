import { Outlet } from "react-router";
import Navigation from "./Navigation";
export default function Signup() {
  return (
    <>
      <div className="flex gap-x-72">
        <Navigation />
        <div className="relative top-8 ">
          <form>
            <div>
              <div>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="Surname"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="emai"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="New Password"
                />
              </div>
              <div>
                <p>Date of birth</p>
                <div>
                  <select
                    name="day"
                    className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                  <select
                    name="month"
                    className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
                  >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                  </select>
                  <select
                    name="year"
                    className="text-md flex-1 px-1 py-1.5 ring-1 ring-gray-400 rounded-md outline-none"
                  >
                    <option>1990</option>
                    <option>1991</option>
                    <option>1992</option>
                    <option>1993</option>
                    <option>1994</option>
                    <option>1995</option>
                    <option>1996</option>
                    <option>1997</option>
                    <option>1998</option>
                    <option>1999</option>
                    <option>2000</option>
                    <option>2001</option>
                    <option>2002</option>
                    <option>2003</option>
                    <option>2004</option>
                    <option>2005</option>
                    <option>2006</option>
                    <option>2007</option>
                    <option>2008</option>
                    <option>2009</option>
                    <option>2010</option>
                    <option>2011</option>
                    <option>2012</option>
                    <option>2013</option>
                    <option>2014</option>
                    <option>2015</option>
                    <option>2016</option>
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                    <option>2022</option>
                    <option>2023</option>
                  </select>
                </div>
              </div>
              {/* Gender */}
              <div>
                <p>Gender</p>
                <label htmlFor="female">
                  <span>Female</span>
                  <input type="radio" name="gender" id="female" />
                </label>
                <label htmlFor="male">
                  <span>Male</span>
                  <input type="radio" name="gender" id="male" />
                </label>
              </div>

              {/* Information */}

              <div>
                <p>
                  People who use our service may have uploaded your contact
                  information to Facebook.
                </p>
                <a href="#" target="_blank">
                  Learn more
                </a>
                <p>
                  By clicking Sign Up, you agree to our Terms, Privacy Policy ,
                  Cookies Policy. You may receive SMS notifications from us and
                  can opt out at any time.
                </p>
              </div>

              <div>
                <button>Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Outlet />
    </>
  );
}
