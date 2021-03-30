import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CapstoneFinalProj from '../lib/capstone_final_proj-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CapstoneFinalProj.CapstoneFinalProjStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
