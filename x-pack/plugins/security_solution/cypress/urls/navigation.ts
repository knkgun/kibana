/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

export const DETECTIONS_URL = 'app/security/alerts';
export const DETECTIONS_RULE_MANAGEMENT_URL = 'app/security/rules';
export const detectionsRuleDetailsUrl = (ruleId: string) => `app/security/rules/id/${ruleId}`;

export const CASES_URL = '/app/security/cases';
export const DETECTIONS = '/app/security/alerts';
export const EXCEPTIONS_URL = 'app/security/exceptions';

export const HOSTS_URL = '/app/security/hosts/allHosts';
export const HOSTS_PAGE_TAB_URLS = {
  allHosts: '/app/security/hosts/allHosts',
  anomalies: '/app/security/hosts/anomalies',
  authentications: '/app/security/hosts/authentications',
  events: '/app/security/hosts/events',
  uncommonProcesses: '/app/security/hosts/uncommonProcesses',
};
export const KIBANA_HOME = '/app/home#/';
export const ADMINISTRATION_URL = '/app/security/administration';
export const NETWORK_URL = '/app/security/network';
export const OVERVIEW_URL = '/app/security/overview';
export const RULE_CREATION = 'app/security/rules/create';
export const TIMELINES_URL = '/app/security/timelines';
export const TIMELINE_TEMPLATES_URL = '/app/security/timelines/template';
