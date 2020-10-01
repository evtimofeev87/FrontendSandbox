import { grouping } from './data.js';

const byDay = [
  {
    startDate: '01.06.2020',
    endDate: '03.15.2020',
    sentComputed: 8936319,
    deliveredComputed: 6608072,
    deliveryRate: 73.95,
    notSentComputed: 2328247,
    bounceRate: 26.05,
    openedComputed: 728879,
    openRate: 11.03,
    clickedComputed: 22800,
    clickToOpenRate: 3.13,
    unsubscribedComputed: 2584,
    unsubscribeRate: 0.04,
    complainedComputed: 2579,
    spamRate: 0.04,
    summary: true
  },
  {
    startDate: '01-06-20',
    endDate: '01-06-20',
    sentComputed: 115000,
    deliveredComputed: 114987,
    deliveryRate: 99.99,
    notSentComputed: 13,
    bounceRate: 0.01,
    openedComputed: 2741,
    openRate: 2.38,
    clickedComputed: 257,
    clickToOpenRate: 9.38,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '01-07-20',
    endDate: '01-07-20',
    sentComputed: 168956,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99170,
    bounceRate: 58.70,
    openedComputed: 3569,
    openRate: 5.11,
    clickedComputed: 345,
    clickToOpenRate: 9.67,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.06,
    complainedComputed: 42,
    spamRate: 0.06
  },
  {
    startDate: '01-08-20',
    endDate: '01-08-20',
    sentComputed: 148356,
    deliveredComputed: 143000,
    deliveryRate: 96.39,
    notSentComputed: 5356,
    bounceRate: 3.61,
    openedComputed: 4899,
    openRate: 3.43,
    clickedComputed: 303,
    clickToOpenRate: 6.18,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 43,
    spamRate: 0.03
  },
  {
    startDate: '01-09-20',
    endDate: '01-09-20',
    sentComputed: 112589,
    deliveredComputed: 100000,
    deliveryRate: 88.82,
    notSentComputed: 12589,
    bounceRate: 11.18,
    openedComputed: 1589,
    openRate: 1.59,
    clickedComputed: 317,
    clickToOpenRate: 19.95,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.05,
    complainedComputed: 51,
    spamRate: 0.05
  },
  {
    startDate: '01-10-20',
    endDate: '01-10-20',
    sentComputed: 189687,
    deliveredComputed: 2654,
    deliveryRate: 1.40,
    notSentComputed: 187033,
    bounceRate: 98.60,
    openedComputed: 6735,
    openRate: 253.77,
    clickedComputed: 489,
    clickToOpenRate: 7.26,
    unsubscribedComputed: 29,
    unsubscribeRate: 1.09,
    complainedComputed: 29,
    spamRate: 1.09
  },
  {
    startDate: '01-11-20',
    endDate: '01-11-20',
    sentComputed: 168957,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99171,
    bounceRate: 58.70,
    openedComputed: 4175,
    openRate: 5.98,
    clickedComputed: 174,
    clickToOpenRate: 4.17,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.02,
    complainedComputed: 12,
    spamRate: 0.02
  },
  {
    startDate: '01-12-20',
    endDate: '01-12-20',
    sentComputed: 147356,
    deliveredComputed: 112000,
    deliveryRate: 76.01,
    notSentComputed: 35356,
    bounceRate: 23.99,
    openedComputed: 8697,
    openRate: 7.77,
    clickedComputed: 286,
    clickToOpenRate: 3.29,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.04,
    complainedComputed: 44,
    spamRate: 0.04
  },
  {
    startDate: '01-13-20',
    endDate: '01-13-20',
    sentComputed: 145173,
    deliveredComputed: 140000,
    deliveryRate: 96.44,
    notSentComputed: 5173,
    bounceRate: 3.56,
    openedComputed: 1358,
    openRate: 0.97,
    clickedComputed: 673,
    clickToOpenRate: 49.56,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '01-14-20',
    endDate: '01-14-20',
    sentComputed: 139671,
    deliveredComputed: 4395,
    deliveryRate: 3.15,
    notSentComputed: 135276,
    bounceRate: 96.85,
    openedComputed: 2035,
    openRate: 46.30,
    clickedComputed: 125,
    clickToOpenRate: 6.14,
    unsubscribedComputed: 41,
    unsubscribeRate: 0.93,
    complainedComputed: 41,
    spamRate: 0.93
  },
  {
    startDate: '01-15-20',
    endDate: '01-15-20',
    sentComputed: 146352,
    deliveredComputed: 2654,
    deliveryRate: 1.81,
    notSentComputed: 143698,
    bounceRate: 98.19,
    openedComputed: 3478,
    openRate: 131.05,
    clickedComputed: 231,
    clickToOpenRate: 6.64,
    unsubscribedComputed: 39,
    unsubscribeRate: 1.47,
    complainedComputed: 39,
    spamRate: 1.47
  },
  {
    startDate: '01-16-20',
    endDate: '01-16-20',
    sentComputed: 115000,
    deliveredComputed: 69786,
    deliveryRate: 60.68,
    notSentComputed: 45214,
    bounceRate: 39.32,
    openedComputed: 23000,
    openRate: 32.96,
    clickedComputed: 257,
    clickToOpenRate: 1.12,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.05,
    complainedComputed: 51,
    spamRate: 0.07
  },
  {
    startDate: '01-17-20',
    endDate: '01-17-20',
    sentComputed: 168956,
    deliveredComputed: 167837,
    deliveryRate: 99.34,
    notSentComputed: 1119,
    bounceRate: 0.66,
    openedComputed: 45000,
    openRate: 26.81,
    clickedComputed: 345,
    clickToOpenRate: 0.77,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.03,
    complainedComputed: 29,
    spamRate: 0.02
  },
  {
    startDate: '01-18-20',
    endDate: '01-18-20',
    sentComputed: 148356,
    deliveredComputed: 148356,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 12000,
    openRate: 8.09,
    clickedComputed: 303,
    clickToOpenRate: 2.53,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 12,
    spamRate: 0.01
  },
  {
    startDate: '01-19-20',
    endDate: '01-19-20',
    sentComputed: 0,
    deliveredComputed: 0,
    deliveryRate: 0.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 2300,
    openRate: 0.00,
    clickedComputed: 317,
    clickToOpenRate: 13.78,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.00,
    complainedComputed: 44,
    spamRate: 0.00
  },
  {
    startDate: '01-20-20',
    endDate: '01-20-20',
    sentComputed: 189687,
    deliveredComputed: 189687,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 12000,
    openRate: 6.33,
    clickedComputed: 489,
    clickToOpenRate: 4.08,
    unsubscribedComputed: 29,
    unsubscribeRate: 0.02,
    complainedComputed: 36,
    spamRate: 0.02
  },
  {
    startDate: '01-21-20',
    endDate: '01-21-20',
    sentComputed: 168957,
    deliveredComputed: 167456,
    deliveryRate: 99.11,
    notSentComputed: 1501,
    bounceRate: 0.89,
    openedComputed: 15000,
    openRate: 8.96,
    clickedComputed: 174,
    clickToOpenRate: 1.16,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.01,
    complainedComputed: 41,
    spamRate: 0.02
  },
  {
    startDate: '01-22-20',
    endDate: '01-22-20',
    sentComputed: 147356,
    deliveredComputed: 143678,
    deliveryRate: 97.50,
    notSentComputed: 3678,
    bounceRate: 2.50,
    openedComputed: 7900,
    openRate: 5.50,
    clickedComputed: 286,
    clickToOpenRate: 3.62,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.03,
    complainedComputed: 39,
    spamRate: 0.03
  },
  {
    startDate: '01-23-20',
    endDate: '01-23-20',
    sentComputed: 0,
    deliveredComputed: 0,
    deliveryRate: 0.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 1089,
    openRate: 0.00,
    clickedComputed: 673,
    clickToOpenRate: 61.80,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.00,
    complainedComputed: 36,
    spamRate: 0.00
  },
  {
    startDate: '01-24-20',
    endDate: '01-24-20',
    sentComputed: 139671,
    deliveredComputed: 139111,
    deliveryRate: 99.60,
    notSentComputed: 560,
    bounceRate: 0.40,
    openedComputed: 34000,
    openRate: 24.44,
    clickedComputed: 125,
    clickToOpenRate: 0.37,
    unsubscribedComputed: 41,
    unsubscribeRate: 0.03,
    complainedComputed: 42,
    spamRate: 0.03
  },
  {
    startDate: '01-25-20',
    endDate: '01-25-20',
    sentComputed: 146352,
    deliveredComputed: 146100,
    deliveryRate: 99.83,
    notSentComputed: 252,
    bounceRate: 0.17,
    openedComputed: 11000,
    openRate: 7.53,
    clickedComputed: 231,
    clickToOpenRate: 2.10,
    unsubscribedComputed: 39,
    unsubscribeRate: 0.03,
    complainedComputed: 43,
    spamRate: 0.03
  },
  {
    startDate: '01-26-20',
    endDate: '01-26-20',
    sentComputed: 345,
    deliveredComputed: 333,
    deliveryRate: 96.52,
    notSentComputed: 12,
    bounceRate: 3.48,
    openedComputed: 967,
    openRate: 290.39,
    clickedComputed: 489,
    clickToOpenRate: 50.57,
    unsubscribedComputed: 36,
    unsubscribeRate: 10.81,
    complainedComputed: 51,
    spamRate: 15.32
  },
  {
    startDate: '01-27-20',
    endDate: '01-27-20',
    sentComputed: 12000,
    deliveredComputed: 12000,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 2345,
    openRate: 19.54,
    clickedComputed: 174,
    clickToOpenRate: 7.42,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.35,
    complainedComputed: 29,
    spamRate: 0.24
  },
  {
    startDate: '01-28-20',
    endDate: '01-28-20',
    sentComputed: 198745,
    deliveredComputed: 197564,
    deliveryRate: 99.41,
    notSentComputed: 1181,
    bounceRate: 0.59,
    openedComputed: 11000,
    openRate: 5.57,
    clickedComputed: 286,
    clickToOpenRate: 2.60,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.02,
    complainedComputed: 12,
    spamRate: 0.01
  },
  {
    startDate: '01-29-20',
    endDate: '01-29-20',
    sentComputed: 13456,
    deliveredComputed: 13001,
    deliveryRate: 96.62,
    notSentComputed: 455,
    bounceRate: 3.38,
    openedComputed: 29000,
    openRate: 223.06,
    clickedComputed: 673,
    clickToOpenRate: 2.32,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.39,
    complainedComputed: 44,
    spamRate: 0.34
  },
  {
    startDate: '01-30-20',
    endDate: '01-30-20',
    sentComputed: 167299,
    deliveredComputed: 167234,
    deliveryRate: 99.96,
    notSentComputed: 65,
    bounceRate: 0.04,
    openedComputed: 13000,
    openRate: 7.77,
    clickedComputed: 125,
    clickToOpenRate: 0.96,
    unsubscribedComputed: 29,
    unsubscribeRate: 0.02,
    complainedComputed: 36,
    spamRate: 0.02
  },
  {
    startDate: '01-31-20',
    endDate: '01-31-20',
    sentComputed: 159678,
    deliveredComputed: 159600,
    deliveryRate: 99.95,
    notSentComputed: 78,
    bounceRate: 0.05,
    openedComputed: 26780,
    openRate: 16.78,
    clickedComputed: 231,
    clickToOpenRate: 0.86,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.01,
    complainedComputed: 41,
    spamRate: 0.03
  },
  {
    startDate: '02-01-20',
    endDate: '02-01-20',
    sentComputed: 115000,
    deliveredComputed: 114987,
    deliveryRate: 99.99,
    notSentComputed: 13,
    bounceRate: 0.01,
    openedComputed: 2741,
    openRate: 2.38,
    clickedComputed: 257,
    clickToOpenRate: 9.38,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '02-02-20',
    endDate: '02-02-20',
    sentComputed: 168956,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99170,
    bounceRate: 58.70,
    openedComputed: 3569,
    openRate: 5.11,
    clickedComputed: 345,
    clickToOpenRate: 9.67,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.06,
    complainedComputed: 42,
    spamRate: 0.06
  },
  {
    startDate: '02-03-20',
    endDate: '02-03-20',
    sentComputed: 148356,
    deliveredComputed: 143000,
    deliveryRate: 96.39,
    notSentComputed: 5356,
    bounceRate: 3.61,
    openedComputed: 4899,
    openRate: 3.43,
    clickedComputed: 303,
    clickToOpenRate: 6.18,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 43,
    spamRate: 0.03
  },
  {
    startDate: '02-04-20',
    endDate: '02-04-20',
    sentComputed: 112589,
    deliveredComputed: 100000,
    deliveryRate: 88.82,
    notSentComputed: 12589,
    bounceRate: 11.18,
    openedComputed: 1589,
    openRate: 1.59,
    clickedComputed: 317,
    clickToOpenRate: 19.95,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.05,
    complainedComputed: 51,
    spamRate: 0.05
  },
  {
    startDate: '02-05-20',
    endDate: '02-05-20',
    sentComputed: 189687,
    deliveredComputed: 2654,
    deliveryRate: 1.40,
    notSentComputed: 187033,
    bounceRate: 98.60,
    openedComputed: 6735,
    openRate: 253.77,
    clickedComputed: 489,
    clickToOpenRate: 7.26,
    unsubscribedComputed: 29,
    unsubscribeRate: 1.09,
    complainedComputed: 29,
    spamRate: 1.09
  },
  {
    startDate: '02-06-20',
    endDate: '02-06-20',
    sentComputed: 168957,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99171,
    bounceRate: 58.70,
    openedComputed: 4175,
    openRate: 5.98,
    clickedComputed: 174,
    clickToOpenRate: 4.17,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.02,
    complainedComputed: 12,
    spamRate: 0.02
  },
  {
    startDate: '02-07-20',
    endDate: '02-07-20',
    sentComputed: 147356,
    deliveredComputed: 112000,
    deliveryRate: 76.01,
    notSentComputed: 35356,
    bounceRate: 23.99,
    openedComputed: 8697,
    openRate: 7.77,
    clickedComputed: 286,
    clickToOpenRate: 3.29,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.04,
    complainedComputed: 44,
    spamRate: 0.04
  },
  {
    startDate: '02-08-20',
    endDate: '02-08-20',
    sentComputed: 145173,
    deliveredComputed: 140000,
    deliveryRate: 96.44,
    notSentComputed: 5173,
    bounceRate: 3.56,
    openedComputed: 1358,
    openRate: 0.97,
    clickedComputed: 673,
    clickToOpenRate: 49.56,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '02-09-20',
    endDate: '02-09-20',
    sentComputed: 139671,
    deliveredComputed: 4395,
    deliveryRate: 3.15,
    notSentComputed: 135276,
    bounceRate: 96.85,
    openedComputed: 2035,
    openRate: 46.30,
    clickedComputed: 125,
    clickToOpenRate: 6.14,
    unsubscribedComputed: 41,
    unsubscribeRate: 0.93,
    complainedComputed: 41,
    spamRate: 0.93
  },
  {
    startDate: '02-10-20',
    endDate: '02-10-20',
    sentComputed: 146352,
    deliveredComputed: 2654,
    deliveryRate: 1.81,
    notSentComputed: 143698,
    bounceRate: 98.19,
    openedComputed: 3478,
    openRate: 131.05,
    clickedComputed: 231,
    clickToOpenRate: 6.64,
    unsubscribedComputed: 39,
    unsubscribeRate: 1.47,
    complainedComputed: 39,
    spamRate: 1.47
  },
  {
    startDate: '02-11-20',
    endDate: '02-11-20',
    sentComputed: 115000,
    deliveredComputed: 69786,
    deliveryRate: 60.68,
    notSentComputed: 45214,
    bounceRate: 39.32,
    openedComputed: 23000,
    openRate: 32.96,
    clickedComputed: 257,
    clickToOpenRate: 1.12,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.05,
    complainedComputed: 51,
    spamRate: 0.07
  },
  {
    startDate: '02-12-20',
    endDate: '02-12-20',
    sentComputed: 168956,
    deliveredComputed: 167837,
    deliveryRate: 99.34,
    notSentComputed: 1119,
    bounceRate: 0.66,
    openedComputed: 45000,
    openRate: 26.81,
    clickedComputed: 345,
    clickToOpenRate: 0.77,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.03,
    complainedComputed: 29,
    spamRate: 0.02
  },
  {
    startDate: '02-13-20',
    endDate: '02-13-20',
    sentComputed: 148356,
    deliveredComputed: 148356,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 12000,
    openRate: 8.09,
    clickedComputed: 303,
    clickToOpenRate: 2.53,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 12,
    spamRate: 0.01
  },
  {
    startDate: '02-14-20',
    endDate: '02-14-20',
    sentComputed: 0,
    deliveredComputed: 0,
    deliveryRate: 0.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 2300,
    openRate: 0.00,
    clickedComputed: 317,
    clickToOpenRate: 13.78,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.00,
    complainedComputed: 44,
    spamRate: 0.00
  },
  {
    startDate: '02-15-20',
    endDate: '02-15-20',
    sentComputed: 189687,
    deliveredComputed: 189687,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 12000,
    openRate: 6.33,
    clickedComputed: 489,
    clickToOpenRate: 4.08,
    unsubscribedComputed: 29,
    unsubscribeRate: 0.02,
    complainedComputed: 36,
    spamRate: 0.02
  },
  {
    startDate: '02-16-20',
    endDate: '02-16-20',
    sentComputed: 168957,
    deliveredComputed: 167456,
    deliveryRate: 99.11,
    notSentComputed: 1501,
    bounceRate: 0.89,
    openedComputed: 15000,
    openRate: 8.96,
    clickedComputed: 174,
    clickToOpenRate: 1.16,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.01,
    complainedComputed: 41,
    spamRate: 0.02
  },
  {
    startDate: '02-17-20',
    endDate: '02-17-20',
    sentComputed: 147356,
    deliveredComputed: 143678,
    deliveryRate: 97.50,
    notSentComputed: 3678,
    bounceRate: 2.50,
    openedComputed: 7900,
    openRate: 5.50,
    clickedComputed: 286,
    clickToOpenRate: 3.62,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.03,
    complainedComputed: 39,
    spamRate: 0.03
  },
  {
    startDate: '02-18-20',
    endDate: '02-18-20',
    sentComputed: 0,
    deliveredComputed: 0,
    deliveryRate: 0.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 1089,
    openRate: 0.00,
    clickedComputed: 673,
    clickToOpenRate: 61.80,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.00,
    complainedComputed: 36,
    spamRate: 0.00
  },
  {
    startDate: '02-19-20',
    endDate: '02-19-20',
    sentComputed: 139671,
    deliveredComputed: 139111,
    deliveryRate: 99.60,
    notSentComputed: 560,
    bounceRate: 0.40,
    openedComputed: 34000,
    openRate: 24.44,
    clickedComputed: 125,
    clickToOpenRate: 0.37,
    unsubscribedComputed: 41,
    unsubscribeRate: 0.03,
    complainedComputed: 42,
    spamRate: 0.03
  },
  {
    startDate: '02-20-20',
    endDate: '02-20-20',
    sentComputed: 146352,
    deliveredComputed: 146100,
    deliveryRate: 99.83,
    notSentComputed: 252,
    bounceRate: 0.17,
    openedComputed: 11000,
    openRate: 7.53,
    clickedComputed: 231,
    clickToOpenRate: 2.10,
    unsubscribedComputed: 39,
    unsubscribeRate: 0.03,
    complainedComputed: 43,
    spamRate: 0.03
  },
  {
    startDate: '02-21-20',
    endDate: '02-21-20',
    sentComputed: 345,
    deliveredComputed: 333,
    deliveryRate: 96.52,
    notSentComputed: 12,
    bounceRate: 3.48,
    openedComputed: 967,
    openRate: 290.39,
    clickedComputed: 489,
    clickToOpenRate: 50.57,
    unsubscribedComputed: 36,
    unsubscribeRate: 10.81,
    complainedComputed: 51,
    spamRate: 15.32
  },
  {
    startDate: '02-22-20',
    endDate: '02-22-20',
    sentComputed: 12000,
    deliveredComputed: 12000,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 2345,
    openRate: 19.54,
    clickedComputed: 174,
    clickToOpenRate: 7.42,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.35,
    complainedComputed: 29,
    spamRate: 0.24
  },
  {
    startDate: '02-23-20',
    endDate: '02-23-20',
    sentComputed: 198745,
    deliveredComputed: 197564,
    deliveryRate: 99.41,
    notSentComputed: 1181,
    bounceRate: 0.59,
    openedComputed: 11000,
    openRate: 5.57,
    clickedComputed: 286,
    clickToOpenRate: 2.60,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.02,
    complainedComputed: 12,
    spamRate: 0.01
  },
  {
    startDate: '02-24-20',
    endDate: '02-24-20',
    sentComputed: 13456,
    deliveredComputed: 13001,
    deliveryRate: 96.62,
    notSentComputed: 455,
    bounceRate: 3.38,
    openedComputed: 29000,
    openRate: 223.06,
    clickedComputed: 673,
    clickToOpenRate: 2.32,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.39,
    complainedComputed: 44,
    spamRate: 0.34
  },
  {
    startDate: '02-25-20',
    endDate: '02-25-20',
    sentComputed: 167299,
    deliveredComputed: 167234,
    deliveryRate: 99.96,
    notSentComputed: 65,
    bounceRate: 0.04,
    openedComputed: 13000,
    openRate: 7.77,
    clickedComputed: 125,
    clickToOpenRate: 0.96,
    unsubscribedComputed: 29,
    unsubscribeRate: 0.02,
    complainedComputed: 36,
    spamRate: 0.02
  },
  {
    startDate: '02-26-20',
    endDate: '02-26-20',
    sentComputed: 159678,
    deliveredComputed: 159600,
    deliveryRate: 99.95,
    notSentComputed: 78,
    bounceRate: 0.05,
    openedComputed: 26780,
    openRate: 16.78,
    clickedComputed: 231,
    clickToOpenRate: 0.86,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.01,
    complainedComputed: 41,
    spamRate: 0.03
  },
  {
    startDate: '02-27-20',
    endDate: '02-27-20',
    sentComputed: 115000,
    deliveredComputed: 114987,
    deliveryRate: 99.99,
    notSentComputed: 13,
    bounceRate: 0.01,
    openedComputed: 2741,
    openRate: 2.38,
    clickedComputed: 257,
    clickToOpenRate: 9.38,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '02-28-20',
    endDate: '02-28-20',
    sentComputed: 168956,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99170,
    bounceRate: 58.70,
    openedComputed: 3569,
    openRate: 5.11,
    clickedComputed: 345,
    clickToOpenRate: 9.67,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.06,
    complainedComputed: 42,
    spamRate: 0.06
  },
  {
    startDate: '02-29-20',
    endDate: '02-29-20',
    sentComputed: 148356,
    deliveredComputed: 143000,
    deliveryRate: 96.39,
    notSentComputed: 5356,
    bounceRate: 3.61,
    openedComputed: 4899,
    openRate: 3.43,
    clickedComputed: 303,
    clickToOpenRate: 6.18,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 43,
    spamRate: 0.03
  },
  {
    startDate: '03-01-20',
    endDate: '03-01-20',
    sentComputed: 112589,
    deliveredComputed: 100000,
    deliveryRate: 88.82,
    notSentComputed: 12589,
    bounceRate: 11.18,
    openedComputed: 1589,
    openRate: 1.59,
    clickedComputed: 317,
    clickToOpenRate: 19.95,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.05,
    complainedComputed: 51,
    spamRate: 0.05
  },
  {
    startDate: '03-02-20',
    endDate: '03-02-20',
    sentComputed: 189687,
    deliveredComputed: 2654,
    deliveryRate: 1.40,
    notSentComputed: 187033,
    bounceRate: 98.60,
    openedComputed: 6735,
    openRate: 253.77,
    clickedComputed: 489,
    clickToOpenRate: 7.26,
    unsubscribedComputed: 29,
    unsubscribeRate: 1.09,
    complainedComputed: 29,
    spamRate: 1.09
  },
  {
    startDate: '03-03-20',
    endDate: '03-03-20',
    sentComputed: 168957,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99171,
    bounceRate: 58.70,
    openedComputed: 4175,
    openRate: 5.98,
    clickedComputed: 174,
    clickToOpenRate: 4.17,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.02,
    complainedComputed: 12,
    spamRate: 0.02
  },
  {
    startDate: '03-04-20',
    endDate: '03-04-20',
    sentComputed: 147356,
    deliveredComputed: 112000,
    deliveryRate: 76.01,
    notSentComputed: 35356,
    bounceRate: 23.99,
    openedComputed: 8697,
    openRate: 7.77,
    clickedComputed: 286,
    clickToOpenRate: 3.29,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.04,
    complainedComputed: 44,
    spamRate: 0.04
  },
  {
    startDate: '03-05-20',
    endDate: '03-05-20',
    sentComputed: 145173,
    deliveredComputed: 140000,
    deliveryRate: 96.44,
    notSentComputed: 5173,
    bounceRate: 3.56,
    openedComputed: 1358,
    openRate: 0.97,
    clickedComputed: 673,
    clickToOpenRate: 49.56,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '03-06-20',
    endDate: '03-06-20',
    sentComputed: 139671,
    deliveredComputed: 4395,
    deliveryRate: 3.15,
    notSentComputed: 135276,
    bounceRate: 96.85,
    openedComputed: 2035,
    openRate: 46.30,
    clickedComputed: 125,
    clickToOpenRate: 6.14,
    unsubscribedComputed: 41,
    unsubscribeRate: 0.93,
    complainedComputed: 41,
    spamRate: 0.93
  },
  {
    startDate: '03-07-20',
    endDate: '03-07-20',
    sentComputed: 146352,
    deliveredComputed: 2654,
    deliveryRate: 1.81,
    notSentComputed: 143698,
    bounceRate: 98.19,
    openedComputed: 3478,
    openRate: 131.05,
    clickedComputed: 231,
    clickToOpenRate: 6.64,
    unsubscribedComputed: 39,
    unsubscribeRate: 1.47,
    complainedComputed: 39,
    spamRate: 1.47
  },
  {
    startDate: '03-08-20',
    endDate: '03-08-20',
    sentComputed: 115000,
    deliveredComputed: 69786,
    deliveryRate: 60.68,
    notSentComputed: 45214,
    bounceRate: 39.32,
    openedComputed: 23000,
    openRate: 32.96,
    clickedComputed: 257,
    clickToOpenRate: 1.12,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.05,
    complainedComputed: 51,
    spamRate: 0.07
  },
  {
    startDate: '03-09-20',
    endDate: '03-09-20',
    sentComputed: 168956,
    deliveredComputed: 167837,
    deliveryRate: 99.34,
    notSentComputed: 1119,
    bounceRate: 0.66,
    openedComputed: 45000,
    openRate: 26.81,
    clickedComputed: 345,
    clickToOpenRate: 0.77,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.03,
    complainedComputed: 29,
    spamRate: 0.02
  },
  {
    startDate: '03-10-20',
    endDate: '03-10-20',
    sentComputed: 148356,
    deliveredComputed: 148356,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 12000,
    openRate: 8.09,
    clickedComputed: 303,
    clickToOpenRate: 2.53,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 12,
    spamRate: 0.01
  },
  {
    startDate: '03-11-20',
    endDate: '03-11-20',
    sentComputed: 0,
    deliveredComputed: 0,
    deliveryRate: 0.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 2300,
    openRate: 0.00,
    clickedComputed: 317,
    clickToOpenRate: 13.78,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.00,
    complainedComputed: 44,
    spamRate: 0.00
  },
  {
    startDate: '03-12-20',
    endDate: '03-12-20',
    sentComputed: 189687,
    deliveredComputed: 189687,
    deliveryRate: 100.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 12000,
    openRate: 6.33,
    clickedComputed: 489,
    clickToOpenRate: 4.08,
    unsubscribedComputed: 29,
    unsubscribeRate: 0.02,
    complainedComputed: 36,
    spamRate: 0.02
  },
  {
    startDate: '03-13-20',
    endDate: '03-13-20',
    sentComputed: 168957,
    deliveredComputed: 167456,
    deliveryRate: 99.11,
    notSentComputed: 1501,
    bounceRate: 0.89,
    openedComputed: 15000,
    openRate: 8.96,
    clickedComputed: 174,
    clickToOpenRate: 1.16,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.01,
    complainedComputed: 41,
    spamRate: 0.02
  },
  {
    startDate: '03-14-20',
    endDate: '03-14-20',
    sentComputed: 147356,
    deliveredComputed: 143678,
    deliveryRate: 97.50,
    notSentComputed: 3678,
    bounceRate: 2.50,
    openedComputed: 7900,
    openRate: 5.50,
    clickedComputed: 286,
    clickToOpenRate: 3.62,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.03,
    complainedComputed: 39,
    spamRate: 0.03
  },
  {
    startDate: '03-15-20',
    endDate: '03-15-20',
    sentComputed: 0,
    deliveredComputed: 0,
    deliveryRate: 0.00,
    notSentComputed: 0,
    bounceRate: 0.00,
    openedComputed: 1089,
    openRate: 0.00,
    clickedComputed: 673,
    clickToOpenRate: 61.80,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.00,
    complainedComputed: 36,
    spamRate: 0.00
  }
];

const byWeek = [
  {
    startDate: '01.06.2020',
    endDate: '03.15.2020',
    sentComputed: 1482097,
    deliveredComputed: 1445456,
    deliveryRate: 97.53,
    notSentComputed: 36641,
    bounceRate: 2.47,
    openedComputed: 243631,
    openRate: 16.85,
    clickedComputed: 39276,
    clickToOpenRate: 16.12,
    unsubscribedComputed: 3200,
    unsubscribeRate: 0.22,
    complainedComputed: 373,
    spamRate: 0.03,
    summary: true
  },
  {
    startDate: '01-06-20',
    endDate: '01-12-20',
    sentComputed: 115000,
    deliveredComputed: 15000,
    deliveryRate: 86.96,
    notSentComputed: 23000,
    bounceRate: 13.04,
    openedComputed: 2741,
    openRate: 23.00,
    clickedComputed: 257,
    clickToOpenRate: 11.92,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.26,
    complainedComputed: 36,
    spamRate: 0.04
  },
  {
    startDate: '01-13-20',
    endDate: '01-19-20',
    sentComputed: 168956,
    deliveredComputed: 1059,
    deliveryRate: 99.37,
    notSentComputed: 28457,
    bounceRate: 0.63,
    openedComputed: 3569,
    openRate: 16.95,
    clickedComputed: 345,
    clickToOpenRate: 12.54,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.21,
    complainedComputed: 42,
    spamRate: 0.03
  },
  {
    startDate: '01-20-20',
    endDate: '01-26-20',
    sentComputed: 148356,
    deliveredComputed: 3459,
    deliveryRate: 97.67,
    notSentComputed: 45896,
    bounceRate: 2.33,
    openedComputed: 4899,
    openRate: 31.67,
    clickedComputed: 303,
    clickToOpenRate: 10.67,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.21,
    complainedComputed: 43,
    spamRate: 0.03
  },
  {
    startDate: '01-27-20',
    endDate: '02-02-20',
    sentComputed: 112589,
    deliveredComputed: 6713,
    deliveryRate: 94.04,
    notSentComputed: 12359,
    bounceRate: 5.96,
    openedComputed: 1589,
    openRate: 11.67,
    clickedComputed: 317,
    clickToOpenRate: 12.86,
    unsubscribedComputed: 51,
    unsubscribeRate: 0.30,
    complainedComputed: 51,
    spamRate: 0.05
  },
  {
    startDate: '02-03-20',
    endDate: '02-09-20',
    sentComputed: 189687,
    deliveredComputed: 119,
    deliveryRate: 99.94,
    notSentComputed: 23468,
    bounceRate: 0.06,
    openedComputed: 6735,
    openRate: 12.38,
    clickedComputed: 489,
    clickToOpenRate: 28.70,
    unsubscribedComputed: 29,
    unsubscribeRate: 0.26,
    complainedComputed: 29,
    spamRate: 0.02
  },
  {
    startDate: '02-10-20',
    endDate: '02-16-20',
    sentComputed: 168957,
    deliveredComputed: 2060,
    deliveryRate: 98.78,
    notSentComputed: 22786,
    bounceRate: 1.22,
    openedComputed: 4175,
    openRate: 13.65,
    clickedComputed: 174,
    clickToOpenRate: 18.32,
    unsubscribedComputed: 12,
    unsubscribeRate: 0.10,
    complainedComputed: 12,
    spamRate: 0.01
  },
  {
    startDate: '02-17-20',
    endDate: '02-22-20',
    sentComputed: 147356,
    deliveredComputed: 1098,
    deliveryRate: 99.25,
    notSentComputed: 31942,
    bounceRate: 0.75,
    openedComputed: 8697,
    openRate: 21.84,
    clickedComputed: 286,
    clickToOpenRate: 27.23,
    unsubscribedComputed: 44,
    unsubscribeRate: 0.20,
    complainedComputed: 44,
    spamRate: 0.03
  },
  {
    startDate: '02-24-20',
    endDate: '03-01-20',
    sentComputed: 145173,
    deliveredComputed: 84,
    deliveryRate: 99.94,
    notSentComputed: 18468,
    bounceRate: 0.06,
    openedComputed: 1358,
    openRate: 12.73,
    clickedComputed: 673,
    clickToOpenRate: 7.35,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.46,
    complainedComputed: 36,
    spamRate: 0.02
  },
  {
    startDate: '03-02-20',
    endDate: '03-08-20',
    sentComputed: 139671,
    deliveredComputed: 4395,
    deliveryRate: 96.85,
    notSentComputed: 12568,
    bounceRate: 3.15,
    openedComputed: 2035,
    openRate: 9.29,
    clickedComputed: 125,
    clickToOpenRate: 16.19,
    unsubscribedComputed: 41,
    unsubscribeRate: 0.09,
    complainedComputed: 41,
    spamRate: 0.03
  },
  {
    startDate: '03-09-20',
    endDate: '03-15-20',
    sentComputed: 146352,
    deliveredComputed: 2654,
    deliveryRate: 98.19,
    notSentComputed: 24687,
    bounceRate: 1.81,
    openedComputed: 3478,
    openRate: 17.18,
    clickedComputed: 231,
    clickToOpenRate: 14.09,
    unsubscribedComputed: 39,
    unsubscribeRate: 0.16,
    complainedComputed: 39,
    spamRate: 0.03
  }
];

const byMonth = [
  {
    startDate: '01.06.2020',
    endDate: '03.15.2020',
    sentComputed: 432312,
    deliveredComputed: 327773,
    deliveryRate: 75.82,
    notSentComputed: 104539,
    bounceRate: 24.18,
    openedComputed: 11209,
    openRate: 3.42,
    clickedComputed: 905,
    clickToOpenRate: 8.07,
    unsubscribedComputed: 121,
    unsubscribeRate: 0.04,
    complainedComputed: 121,
    spamRate: 0.04,
    summary: true
  },
  {
    startDate: '01-01-20',
    endDate: '01-31-20',
    sentComputed: 115000,
    deliveredComputed: 114987,
    deliveryRate: 99.99,
    notSentComputed: 13,
    bounceRate: 0.01,
    openedComputed: 2741,
    openRate: 2.38,
    clickedComputed: 257,
    clickToOpenRate: 9.38,
    unsubscribedComputed: 36,
    unsubscribeRate: 0.03,
    complainedComputed: 36,
    spamRate: 0.03
  },
  {
    startDate: '02-01-20',
    endDate: '02-28-20',
    sentComputed: 168956,
    deliveredComputed: 69786,
    deliveryRate: 41.30,
    notSentComputed: 99170,
    bounceRate: 58.70,
    openedComputed: 3569,
    openRate: 5.11,
    clickedComputed: 345,
    clickToOpenRate: 9.67,
    unsubscribedComputed: 42,
    unsubscribeRate: 0.06,
    complainedComputed: 42,
    spamRate: 0.06
  },
  {
    startDate: '03-01-20',
    endDate: '03-31-20',
    sentComputed: 148356,
    deliveredComputed: 143000,
    deliveryRate: 96.39,
    notSentComputed: 5356,
    bounceRate: 3.61,
    openedComputed: 4899,
    openRate: 3.43,
    clickedComputed: 303,
    clickToOpenRate: 6.18,
    unsubscribedComputed: 43,
    unsubscribeRate: 0.03,
    complainedComputed: 43,
    spamRate: 0.03
  }
];

const byCompare = [
  {
    startDate: '01.06.2020',
    endDate: '03.15.2020',
    sentComputed: 1482097,
    deliveredComputed: 1445456,
    deliveryRate: 97.53,
    notSentComputed: 36641,
    bounceRate: 2.47,
    openedComputed: 243631,
    openRate: 16.85,
    clickedComputed: 39276,
    clickToOpenRate: 16.12,
    unsubscribedComputed: 3200,
    unsubscribeRate: 0.22,
    complainedComputed: 373,
    spamRate: 0.03,
    summary: true
  },
  {
    startDate: '03.16.2020',
    endDate: '05.15.2020',
    sentComputed: 856742,
    deliveredComputed: 842013,
    deliveryRate: 98.28,
    notSentComputed: 14729,
    bounceRate: 1.72,
    openedComputed: 173956,
    openRate: 20.66,
    clickedComputed: 45897,
    clickToOpenRate: 26.38,
    unsubscribedComputed: 3796,
    unsubscribeRate: 0.45,
    complainedComputed: 486,
    spamRate: 0.06,
    summary: true,
    compare: {
      sentComputed: -42.19,
      deliveredComputed: -41.74,
      deliveryRate: 0.77,
      notSentComputed: -59.8,
      bounceRate: -30.36,
      openedComputed: -28.6,
      openRate: 22.61,
      clickedComputed: 16.86,
      clickToOpenRate: 63.65,
      unsubscribedComputed: 18.62,
      unsubscribeRate: 104.54,
      complainedComputed: 30.29,
      spamRate: 100
    }
  }
];

export const getDemoData = (isCompare, groupingType) => {
  if (isCompare) return byCompare;

  switch (groupingType) {
    case grouping.BY_DAY:
      return byDay;
    case grouping.BY_WEEK:
      return byWeek;
    case grouping.BY_MONTH:
      return byMonth;
  }
};
