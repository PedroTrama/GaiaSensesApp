/**
 * @format
 */

import React, { forwardRef } from 'react';
import {
  CompositionHandle,
  CompositionViewProps,
  CompositionView,
} from '../components/CompositionView';
import { Composition } from '.';
import { Patch } from '../hooks/usePatch';

export type CompositionProps = Pick<CompositionViewProps, 'play' | 'onLoad'> & {
  weather: any;
  lightning: any;
};

export const ChaosTree = forwardRef<CompositionHandle, CompositionProps>(
  (props, ref) => {
    const { sketch, patch: patchSource } = Composition.sources['Chaos Tree'];

    return (
      <CompositionView
        ref={ref}
        sketch={sketch}
        patchSource={patchSource}
        {...props}
      />
    );
  },
);

export const Curves = forwardRef<CompositionHandle, CompositionProps>(
  (props, ref) => {
    const { sketch, patch: patchSource } = Composition.sources['Curves'];

    return (
      <CompositionView
        ref={ref}
        sketch={sketch}
        patchSource={patchSource}
        {...props}
      />
    );
  },
);

export const Lluvia = forwardRef<CompositionHandle, CompositionProps>(
  (props, ref) => {
    const { sketch, patch: patchSource } = Composition.sources['Lluvia'];
    const { weather } = props;
    const rain = (weather?.rain && weather.rain['1h']) || 5;

    const handlePlay = (patch: Patch) => {
      patch.send(`fps_${patch.id}`, 1000 / rain);
      patch.start();
    };

    return (
      <CompositionView
        ref={ref}
        sketch={sketch}
        patchSource={patchSource}
        onPlay={handlePlay}
        {...props}
      />
    );
  },
);

export const Rectangles = forwardRef<CompositionHandle, CompositionProps>(
  (props, ref) => {
    const { sketch, patch: patchSource } = Composition.sources['Rectangles'];

    return (
      <CompositionView
        ref={ref}
        sketch={sketch}
        patchSource={patchSource}
        {...props}
      />
    );
  },
);

export const WeatherTree = forwardRef<CompositionHandle, CompositionProps>(
  (props, ref) => {
    const { sketch, patch: patchSource } = Composition.sources['Weather Tree'];

    return (
      <CompositionView
        ref={ref}
        sketch={sketch}
        patchSource={patchSource}
        {...props}
      />
    );
  },
);

export const ZigZag = forwardRef<CompositionHandle, CompositionProps>(
  (props, ref) => {
    const { sketch, patch: patchSource } = Composition.sources['Zig Zag'];

    return (
      <CompositionView
        ref={ref}
        sketch={sketch}
        patchSource={patchSource}
        {...props}
      />
    );
  },
);
