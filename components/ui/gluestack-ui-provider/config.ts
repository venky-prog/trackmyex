'use client';
import { vars } from 'nativewind';

export const config = {
  light: vars({
    /* Primary (Teal Brand Palette) */
    '--color-primary-0': '244 248 246',      // Ultra light tint
    '--color-primary-50': '225 237 234',     // Light pastel container
    '--color-primary-100': '194 216 210',
    '--color-primary-200': '162 194 186',
    '--color-primary-300': '123 176 158',    // Logo secondary accent
    '--color-primary-400': '89 150 133',
    '--color-primary-500': '62 126 111',     // Logo Primary Base
    '--color-primary-600': '49 101 89',
    '--color-primary-700': '38 78 69',
    '--color-primary-800': '27 55 49',
    '--color-primary-900': '16 34 30',
    '--color-primary-950': '10 21 18',       // Deepest dark forest tint

    /* Secondary (Muted Sage/Slate) */
    '--color-secondary-0': '250 252 251',
    '--color-secondary-50': '240 245 243',
    '--color-secondary-100': '222 232 228',
    '--color-secondary-200': '203 218 213',
    '--color-secondary-300': '179 199 193',
    '--color-secondary-400': '151 176 169',
    '--color-secondary-500': '121 149 141',
    '--color-secondary-600': '96 121 114',
    '--color-secondary-700': '76 96 90',
    '--color-secondary-800': '57 71 67',
    '--color-secondary-900': '38 47 45',
    '--color-secondary-950': '22 28 26',

    /* Tertiary (Warm Coral Accent for pop/contrast) */
    '--color-tertiary-0': '255 251 247',
    '--color-tertiary-50': '255 242 230',
    '--color-tertiary-100': '255 224 199',
    '--color-tertiary-200': '254 193 147',
    '--color-tertiary-300': '252 154 92',
    '--color-tertiary-400': '246 117 47',
    '--color-tertiary-500': '222 91 23',
    '--color-tertiary-600': '191 73 14',
    '--color-tertiary-700': '151 55 11',
    '--color-tertiary-800': '111 41 10',
    '--color-tertiary-900': '83 31 9',
    '--color-tertiary-950': '54 19 5',

    /* Error */
    '--color-error-0': '254 242 242',
    '--color-error-50': '254 226 226',
    '--color-error-100': '254 202 202',
    '--color-error-200': '252 165 165',
    '--color-error-300': '248 113 113',
    '--color-error-400': '239 68 68',
    '--color-error-500': '220 38 38',
    '--color-error-600': '185 28 28',
    '--color-error-700': '153 27 27',
    '--color-error-800': '127 29 29',
    '--color-error-900': '99 21 21',
    '--color-error-950': '69 10 10',

    /* Success */
    '--color-success-0': '240 253 244',
    '--color-success-50': '220 252 231',
    '--color-success-100': '187 247 208',
    '--color-success-200': '134 239 172',
    '--color-success-300': '74 222 128',
    '--color-success-400': '34 197 94',
    '--color-success-500': '22 163 74',
    '--color-success-600': '21 128 61',
    '--color-success-700': '21 101 42',
    '--color-success-800': '22 78 38',
    '--color-success-900': '20 61 32',
    '--color-success-950': '5 46 19',

    /* Warning */
    '--color-warning-0': '255 251 235',
    '--color-warning-50': '254 243 199',
    '--color-warning-100': '253 230 138',
    '--color-warning-200': '252 211 77',
    '--color-warning-300': '245 158 11',
    '--color-warning-400': '217 119 6',
    '--color-warning-500': '180 83 9',
    '--color-warning-600': '146 64 14',
    '--color-warning-700': '120 53 4',
    '--color-warning-800': '92 41 4',
    '--color-warning-900': '68 30 3',
    '--color-warning-950': '45 19 2',

    /* Info */
    '--color-info-0': '240 249 255',
    '--color-info-50': '224 242 254',
    '--color-info-100': '186 230 253',
    '--color-info-200': '125 211 252',
    '--color-info-300': '56 189 248',
    '--color-info-400': '14 165 233',
    '--color-info-500': '2 132 199',
    '--color-info-600': '3 105 161',
    '--color-info-700': '7 89 133',
    '--color-info-800': '12 74 110',
    '--color-info-900': '15 43 71',
    '--color-info-950': '8 27 46',

    /* Typography (Dark Premium Teal-Gray) */
    '--color-typography-0': '255 255 255',
    '--color-typography-50': '243 246 245',
    '--color-typography-100': '222 229 227',
    '--color-typography-200': '197 207 204',
    '--color-typography-300': '167 179 175',
    '--color-typography-400': '133 145 141',
    '--color-typography-500': '104 115 112',
    '--color-typography-600': '80 90 87',
    '--color-typography-700': '58 66 64',
    '--color-typography-800': '40 45 44',
    '--color-typography-900': '30 45 41',        // Main Premium Text Accent
    '--color-typography-950': '18 24 22',

    /* Outline */
    '--color-outline-0': '255 255 255',
    '--color-outline-50': '240 244 242',
    '--color-outline-100': '220 228 225',
    '--color-outline-200': '196 207 203',
    '--color-outline-300': '166 179 174',
    '--color-outline-400': '134 145 141',
    '--color-outline-500': '104 115 111',
    '--color-outline-600': '80 89 86',
    '--color-outline-700': '59 66 64',
    '--color-outline-800': '40 45 43',
    '--color-outline-900': '24 28 27',
    '--color-outline-950': '14 15 15',

    /* Background (Crisp dynamic cool light layout) */
    '--color-background-0': '255 255 255',      // Card backgrounds
    '--color-background-50': '244 248 246',     // App Layout base structure
    '--color-background-100': '235 241 239',
    '--color-background-200': '217 226 223',
    '--color-background-300': '191 204 200',
    '--color-background-400': '157 171 166',
    '--color-background-500': '124 138 133',
    '--color-background-600': '96 107 103',
    '--color-background-700': '71 79 76',
    '--color-background-800': '49 54 52',
    '--color-background-900': '30 33 32',
    '--color-background-950': '17 19 18',

    /* Background Special */
    '--color-background-error': '254 242 242',
    '--color-background-warning': '255 251 235',
    '--color-background-success': '240 253 244',
    '--color-background-muted': '244 248 246',
    '--color-background-info': '240 249 255',

    /* Focus Ring Indicator */
    '--color-indicator-primary': '62 126 111',
    '--color-indicator-info': '2 132 199',
    '--color-indicator-error': '220 38 38',
  }),
  dark: vars({
    /* Primary (Inverted for Dark UI Comfort) */
    '--color-primary-0': '10 21 18',
    '--color-primary-50': '16 34 30',
    '--color-primary-100': '27 55 49',
    '--color-primary-200': '38 78 69',
    '--color-primary-300': '49 101 89',
    '--color-primary-400': '62 126 111',
    '--color-primary-500': '89 150 133',     // Softer glow for dark layout
    '--color-primary-600': '123 176 158',
    '--color-primary-700': '162 194 186',
    '--color-primary-800': '194 216 210',
    '--color-primary-900': '225 237 234',
    '--color-primary-950': '244 248 246',

    /* Secondary */
    '--color-secondary-0': '22 28 26',
    '--color-secondary-50': '38 47 45',
    '--color-secondary-100': '57 71 67',
    '--color-secondary-200': '76 96 90',
    '--color-secondary-300': '96 121 114',
    '--color-secondary-400': '121 149 141',
    '--color-secondary-500': '151 176 169',
    '--color-secondary-600': '179 199 193',
    '--color-secondary-700': '203 218 213',
    '--color-secondary-800': '222 232 228',
    '--color-secondary-900': '240 245 243',
    '--color-secondary-950': '250 252 251',

    /* Tertiary */
    '--color-tertiary-0': '54 19 5',
    '--color-tertiary-50': '83 31 9',
    '--color-tertiary-100': '111 41 10',
    '--color-tertiary-200': '151 55 11',
    '--color-tertiary-300': '191 73 14',
    '--color-tertiary-400': '222 91 23',
    '--color-tertiary-500': '246 117 47',
    '--color-tertiary-600': '252 154 92',
    '--color-tertiary-700': '254 193 147',
    '--color-tertiary-800': '255 224 199',
    '--color-tertiary-900': '255 242 230',
    '--color-tertiary-950': '255 251 247',

    /* Error */
    '--color-error-0': '69 10 10',
    '--color-error-50': '99 21 21',
    '--color-error-100': '127 29 29',
    '--color-error-200': '153 27 27',
    '--color-error-300': '185 28 28',
    '--color-error-400': '220 38 38',
    '--color-error-500': '239 68 68',
    '--color-error-600': '248 113 113',
    '--color-error-700': '252 165 165',
    '--color-error-800': '254 202 202',
    '--color-error-900': '254 226 226',
    '--color-error-950': '254 242 242',

    /* Success */
    '--color-success-0': '5 46 19',
    '--color-success-50': '20 61 32',
    '--color-success-100': '22 78 38',
    '--color-success-200': '21 101 42',
    '--color-success-300': '21 128 61',
    '--color-success-400': '22 163 74',
    '--color-success-500': '34 197 94',
    '--color-success-600': '74 222 128',
    '--color-success-700': '134 239 172',
    '--color-success-800': '187 247 208',
    '--color-success-900': '220 252 231',
    '--color-success-950': '240 253 244',

    /* Warning */
    '--color-warning-0': '45 19 2',
    '--color-warning-50': '68 30 3',
    '--color-warning-100': '92 41 4',
    '--color-warning-200': '120 53 4',
    '--color-warning-300': '146 64 14',
    '--color-warning-400': '180 83 9',
    '--color-warning-500': '217 119 6',
    '--color-warning-600': '245 158 11',
    '--color-warning-700': '252 211 77',
    '--color-warning-800': '253 230 138',
    '--color-warning-900': '254 243 199',
    '--color-warning-950': '255 251 235',

    /* Info */
    '--color-info-0': '8 27 46',
    '--color-info-50': '15 43 71',
    '--color-info-100': '12 74 110',
    '--color-info-200': '7 89 133',
    '--color-info-300': '3 105 161',
    '--color-info-400': '2 132 199',
    '--color-info-500': '14 165 233',
    '--color-info-600': '56 189 248',
    '--color-info-700': '125 211 252',
    '--color-info-800': '186 230 253',
    '--color-info-900': '224 242 254',
    '--color-info-950': '240 249 255',

    /* Typography */
    '--color-typography-0': '18 24 22',
    '--color-typography-50': '30 45 41',
    '--color-typography-100': '40 45 44',
    '--color-typography-200': '58 66 64',
    '--color-typography-300': '80 90 87',
    '--color-typography-400': '104 115 112',
    '--color-typography-500': '133 145 141',
    '--color-typography-600': '167 179 175',
    '--color-typography-700': '197 207 204',
    '--color-typography-800': '222 229 227',
    '--color-typography-900': '243 246 245',
    '--color-typography-950': '255 255 255',       // Crisp text against OLED black

    /* Outline */
    '--color-outline-0': '14 15 15',
    '--color-outline-50': '24 28 27',
    '--color-outline-100': '40 45 43',
    '--color-outline-200': '59 66 64',
    '--color-outline-300': '80 89 86',
    '--color-outline-400': '104 115 111',
    '--color-outline-500': '134 145 141',
    '--color-outline-600': '166 179 174',
    '--color-outline-700': '196 207 203',
    '--color-outline-800': '220 228 225',
    '--color-outline-900': '240 244 242',
    '--color-outline-950': '255 255 255',

    /* Background (OLED Dark Optimization) */
    '--color-background-0': '10 14 13',          // Pure ultra dark canvas base
    '--color-background-50': '20 26 24',         // Elevated dark blocks
    '--color-background-100': '30 38 36',
    '--color-background-200': '44 54 51',
    '--color-background-300': '61 74 70',
    '--color-background-400': '82 97 92',
    '--color-background-500': '108 125 119',
    '--color-background-600': '138 156 150',
    '--color-background-700': '169 186 180',
    '--color-background-800': '200 214 209',
    '--color-background-900': '228 237 234',
    '--color-background-950': '245 250 248',

    /* Background Special */
    '--color-background-error': '54 18 18',
    '--color-background-warning': '51 37 13',
    '--color-background-success': '12 38 22',
    '--color-background-muted': '20 26 24',
    '--color-background-info': '10 34 51',

    /* Focus Ring Indicator */
    '--color-indicator-primary': '89 150 133',
    '--color-indicator-info': '14 165 233',
    '--color-indicator-error': '239 68 68',
  }),
};