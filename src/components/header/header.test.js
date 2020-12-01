import React from "react";
import {MemoryRouter} from "react-router-dom";
import renderer from "react-test-renderer";
import {Header} from "./header";
import {AuthorizationStatus} from "../../const";


describe(`Render component Header correctly`, () => {
  it(`Render component Header correctly NO_AUTH`, () => {
    const tree = renderer.create(
        <MemoryRouter>
          <Header authorizationStatus={AuthorizationStatus.NO_AUTH}/>
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it(`Render component Header correctly AUTH`, () => {
    const tree = renderer.create(
        <MemoryRouter>
          <Header authorizationStatus={AuthorizationStatus.AUTH}/>
        </MemoryRouter>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
