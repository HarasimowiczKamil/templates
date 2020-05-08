import * as React from 'react';
import { HydraAdmin } from '@api-platform/admin';

const entrypoint = 'http://symfony.local';

export default () => (
    <HydraAdmin entrypoint={ entrypoint } />
);