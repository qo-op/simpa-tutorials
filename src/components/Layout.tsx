import * as React from "react";
import { Link } from "gatsby";

class Layout extends React.Component<{ pageTitle: string, children: React.ReactNode }> {
  render = () => {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <main>
          <h1>{this.props.pageTitle}</h1>
          {this.props.children}
        </main>
      </div>
    );
  };
}

export default Layout;
