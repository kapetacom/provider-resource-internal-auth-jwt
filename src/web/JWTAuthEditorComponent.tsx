/**
 * Copyright 2023 Kapeta Inc.
 * SPDX-License-Identifier: MIT
 */

import React from 'react';

import {
    FormField,
} from '@kapeta/ui-web-components';
import type { ResourceTypeProviderEditorProps } from '@kapeta/ui-web-types';


export const JWTAuthEditorComponent = (props: ResourceTypeProviderEditorProps) => {

    return (
        <>
            <FormField
                name={"metadata.name"}
                label={"Name"}
                validation={['required']}
                help={"Name your site"}
            />

        </>
    )
};
