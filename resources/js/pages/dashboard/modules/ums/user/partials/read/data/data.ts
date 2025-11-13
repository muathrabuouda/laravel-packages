import { h } from 'vue'
import {
  CheckCircle, XCircle, HelpCircle
} from 'lucide-vue-next'

export const statuses = [
  {
    value: true,
    label: 'Active',
    icon: h(CheckCircle),
  },
  {
    value: false,
    label: 'Inactive',
    icon: h(XCircle),
  }
]

export const verificationCases = [
  {
    value: true,
    label: 'Verified',
    icon: h(CheckCircle),
  },
  {
    value: false,
    label: 'Unverified',
    icon: h(HelpCircle),
  }
]
