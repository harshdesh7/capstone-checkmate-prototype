#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CapstoneFinalProjStack } from '../lib/capstone_final_proj-stack';

const app = new cdk.App();
new CapstoneFinalProjStack(app, 'CapstoneFinalProjStack');
