/* tslint:disable:ordered-imports */
/* tslint:disable:no-consecutive-blank-lines */
/* tslint:disable:no-trailing-whitespace */
/* tslint:disable:max-line-length */
/* tslint:disable:jsdoc-format */
/* tslint:disable:interface-name */
/* tslint:disable:no-any */
/* tslint:disable:object-literal-sort-keys */

import { WithinRangeString } from "italia-ts-commons/lib/strings";
import * as t from "io-ts";

export type stPassword_ppt = t.TypeOf<typeof stPassword_ppt>;
export const stPassword_ppt = WithinRangeString(8, 15);