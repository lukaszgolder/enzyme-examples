import React, { Component } from 'react';

import { InitComponent } from './init/init.component';
import { FindComponent } from './find/find.component';
import { FilterComponent } from './filter/filter.component';
import { ContainsComponent } from './contains/contains.component';
import { DebugComponent } from './debug/debug.component';
import { PropsComponent } from './props/props.component';
import { SimulateComponent } from './simulate/simulate.component';

import { SliderComponent } from '../shared';

export class ShallowComponent extends Component {
  render() {
    return (
      <SliderComponent>
        <InitComponent />
        <FindComponent />
        <FilterComponent />
        <ContainsComponent />
        <DebugComponent />
        <PropsComponent />
        <SimulateComponent />
      </SliderComponent>
    );
  }
}
