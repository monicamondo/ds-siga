// src/stories/foundations/colors.stories.ts
import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular';
import { provideRouter } from '@angular/router';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'siga-colors',
  standalone: true,
  imports: [NgFor],
  template: `
    <div style="font-family:Arial,sans-serif;padding:32px;color:#0A0A0A;max-width:1200px">

      <h1 style="font-size:24px;font-weight:700;margin:0 0 4px">Cores</h1>
      <p style="font-size:12px;color:#757575;margin:0 0 40px">Paleta de cores do SIGA. Usada via tokens CSS — nunca valores hardcoded nos componentes.</p>

      <h2 style="font-size:16px;font-weight:700;margin:0 0 4px">Brand Colors</h2>
      <p style="font-size:12px;color:#757575;margin:0 0 16px">Cores principais da identidade LATAM no SIGA.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px">
        <div *ngFor="let s of brand" style="width:120px">
          <div [style.background]="s.hex" style="height:64px;border-radius:4px;border:1px solid #E0E0E0"></div>
          <div style="font-size:12px;font-weight:700;margin-top:8px">{{s.name}}</div>
          <div style="font-size:12px;color:#757575">{{s.hex}}</div>
          <div style="font-size:10px;color:#9E9E9E">{{s.token}}</div>
        </div>
      </div>

      <h2 style="font-size:16px;font-weight:700;margin:0 0 4px">Semantic Colors</h2>
      <p style="font-size:12px;color:#757575;margin:0 0 16px">Cores com significado funcional — sucesso, erro, alerta, informação.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px">
        <div *ngFor="let s of semantic" style="width:120px">
          <div [style.background]="s.hex" style="height:64px;border-radius:4px;border:1px solid #E0E0E0"></div>
          <div style="font-size:12px;font-weight:700;margin-top:8px">{{s.name}}</div>
          <div style="font-size:12px;color:#757575">{{s.hex}}</div>
          <div style="font-size:10px;color:#9E9E9E">{{s.token}}</div>
        </div>
      </div>

      <h2 style="font-size:16px;font-weight:700;margin:0 0 4px">Text Colors</h2>
      <p style="font-size:12px;color:#757575;margin:0 0 16px">Cores para textos, labels e placeholders.</p>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:40px">
        <div *ngFor="let s of text" style="width:120px">
          <div [style.background]="s.hex" style="height:64px;border-radius:4px;border:1px solid #E0E0E0"></div>
          <div style="font-size:12px;font-weight:700;margin-top:8px">{{s.name}}</div>
          <div style="font-size:12px;color:#757575">{{s.hex}}</div>
          <div style="font-size:10px;color:#9E9E9E">{{s.token}}</div>
        </div>
      </div>

      <div *ngFor="let scale of scales" style="margin-bottom:32px">
        <h2 style="font-size:16px;font-weight:700;margin:0 0 12px">{{scale.name}}</h2>
        <div style="display:flex;gap:4px">
          <div *ngFor="let s of scale.shades" style="flex:1;min-width:0">
            <div [style.background]="s.hex" style="height:48px;border-radius:4px;border:1px solid rgba(0,0,0,0.06)"></div>
            <div style="font-size:10px;color:#757575;margin-top:4px;text-align:center">{{s.stop}}</div>
            <div style="font-size:10px;color:#9E9E9E;text-align:center">{{s.hex}}</div>
          </div>
        </div>
      </div>

    </div>
  `,
})
export class ColorsComponent {
  brand = [
    { name: 'Primary', hex: '#12379C', token: '--siga-brand-primary' },
    { name: 'Destaque', hex: '#56C0D8', token: '--siga-brand-destaque' },
  ];
  semantic = [
    { name: 'Info', hex: '#56C0D8', token: '--siga-info' },
    { name: 'Success', hex: '#198754', token: '--siga-success' },
    { name: 'Danger', hex: '#DC3545', token: '--siga-danger' },
    { name: 'Warning', hex: '#FFC107', token: '--siga-warning' },
    { name: 'Light', hex: '#F9F9F9', token: '--siga-light' },
    { name: 'Border', hex: '#C2C2C2', token: '--siga-border' },
  ];
  text = [
    { name: 'Primary', hex: '#0A0A0A', token: '--siga-text-primary' },
    { name: 'Secondary', hex: '#424242', token: '--siga-text-secondary' },
    { name: 'Tertiary', hex: '#757575', token: '--siga-text-tertiary' },
    { name: 'Disabled', hex: '#C2C2C2', token: '--siga-text-disabled' },
    { name: 'Black', hex: '#000000', token: '--siga-text-black' },
    { name: 'White', hex: '#FFFFFF', token: '--siga-text-white' },
  ];
  scales = [
    {
      name: 'Gray Scale (Sproy)', shades: [
        { stop: '100', hex: '#F9F9F9' }, { stop: '200', hex: '#F0F0F0' }, { stop: '300', hex: '#E0E0E0' },
        { stop: '400', hex: '#C2C2C2' }, { stop: '500', hex: '#9E9E9E' }, { stop: '600', hex: '#757575' },
        { stop: '700', hex: '#424242' }, { stop: '800', hex: '#212121' }, { stop: '900', hex: '#0A0A0A' },
      ]
    },
    {
      name: 'Green Scale (Sgreen)', shades: [
        { stop: '100', hex: '#F8FFFA' }, { stop: '200', hex: '#C6E0CE' }, { stop: '300', hex: '#A0CBB0' },
        { stop: '400', hex: '#57A372' }, { stop: '500', hex: '#188038' }, { stop: '600', hex: '#156F31' },
        { stop: '700', hex: '#115927' }, { stop: '800', hex: '#0C401C' }, { stop: '900', hex: '#06200E' },
      ]
    },
    {
      name: 'Teal Scale (Steal)', shades: [
        { stop: '100', hex: '#E6F9F7' }, { stop: '200', hex: '#BDEEE9' }, { stop: '300', hex: '#8FE1D9' },
        { stop: '400', hex: '#5DCFC3' }, { stop: '500', hex: '#2BBEB0' }, { stop: '600', hex: '#1DA698' },
        { stop: '700', hex: '#138B7F' }, { stop: '800', hex: '#0B6D63' }, { stop: '900', hex: '#064E47' },
      ]
    },
    {
      name: 'Cyan Scale (Scyan)', shades: [
        { stop: '100', hex: '#EAF9FC' }, { stop: '200', hex: '#CFF0F7' }, { stop: '300', hex: '#B0E4F0' },
        { stop: '400', hex: '#8ED6E6' }, { stop: '500', hex: '#56C0D8' }, { stop: '600', hex: '#45A6BB' },
        { stop: '700', hex: '#348C9E' }, { stop: '800', hex: '#237381' }, { stop: '900', hex: '#125964' },
      ]
    },
    {
      name: 'Blue Scale', shades: [
        { stop: '100', hex: '#EEF2FC' }, { stop: '200', hex: '#D8E5FC' }, { stop: '300', hex: '#B4D2F9' },
        { stop: '400', hex: '#8CB6F2' }, { stop: '500', hex: '#5E93EC' }, { stop: '600', hex: '#3973E1' },
        { stop: '700', hex: '#12379C' }, { stop: '800', hex: '#0E2A7A' }, { stop: '900', hex: '#08194D' },
      ]
    },
    {
      name: 'Indigo Scale (Bridigo)', shades: [
        { stop: '100', hex: '#EEF0FD' }, { stop: '200', hex: '#D2D8FA' }, { stop: '300', hex: '#ABB3F6' },
        { stop: '400', hex: '#818CF1' }, { stop: '500', hex: '#5B68EA' }, { stop: '600', hex: '#3F4DDC' },
        { stop: '700', hex: '#2E3BB8' }, { stop: '800', hex: '#202C8E' }, { stop: '900', hex: '#141D63' },
      ]
    },
    {
      name: 'Purple Scale (Spurple)', shades: [
        { stop: '100', hex: '#F5EEFF' }, { stop: '200', hex: '#E4CFFE' }, { stop: '300', hex: '#CEADFB' },
        { stop: '400', hex: '#B688F6' }, { stop: '500', hex: '#9D63EF' }, { stop: '600', hex: '#8444E3' },
        { stop: '700', hex: '#6B2CC9' }, { stop: '800', hex: '#511A9E' }, { stop: '900', hex: '#380D72' },
      ]
    },
    {
      name: 'Plum Scale (Splum)', shades: [
        { stop: '100', hex: '#F8EEF8' }, { stop: '200', hex: '#EDCCED' }, { stop: '300', hex: '#DEA4DE' },
        { stop: '400', hex: '#CE7ECE' }, { stop: '500', hex: '#BC5CBC' }, { stop: '600', hex: '#A03EA0' },
        { stop: '700', hex: '#822682' }, { stop: '800', hex: '#611261' }, { stop: '900', hex: '#420642' },
      ]
    },
    {
      name: 'Pink Scale (Spink)', shades: [
        { stop: '100', hex: '#FFF0F5' }, { stop: '200', hex: '#FFD6E8' }, { stop: '300', hex: '#FFB3D0' },
        { stop: '400', hex: '#FF8AB8' }, { stop: '500', hex: '#FF609E' }, { stop: '600', hex: '#F03E82' },
        { stop: '700', hex: '#CA2264' }, { stop: '800', hex: '#A00F49' }, { stop: '900', hex: '#730031' },
      ]
    },
    {
      name: 'Red Scale (Sred)', shades: [
        { stop: '100', hex: '#FFEBEB' }, { stop: '200', hex: '#F6BCBA' }, { stop: '300', hex: '#EC8E88' },
        { stop: '400', hex: '#E25F56' }, { stop: '500', hex: '#D93025' }, { stop: '600', hex: '#C32B21' },
        { stop: '700', hex: '#A3241C' }, { stop: '800', hex: '#771A14' }, { stop: '900', hex: '#4C110D' },
      ]
    },
    {
      name: 'Orange Scale (Sorange)', shades: [
        { stop: '100', hex: '#FFF4E6' }, { stop: '200', hex: '#FFE2BF' }, { stop: '300', hex: '#FFCC99' },
        { stop: '400', hex: '#FFB36E' }, { stop: '500', hex: '#FF9642' }, { stop: '600', hex: '#F57C00' },
        { stop: '700', hex: '#D06800' }, { stop: '800', hex: '#A65200' }, { stop: '900', hex: '#7A3A00' },
      ]
    },
    {
      name: 'Yellow Scale (Syellow)', shades: [
        { stop: '100', hex: '#FFF3CD' }, { stop: '200', hex: '#FFE69C' }, { stop: '300', hex: '#FFDA6A' },
        { stop: '400', hex: '#FFCD39' }, { stop: '500', hex: '#FFC107' }, { stop: '600', hex: '#CC9A06' },
        { stop: '700', hex: '#997404' }, { stop: '800', hex: '#664D03' }, { stop: '900', hex: '#332701' },
      ]
    },
  ];
}

const meta: Meta<ColorsComponent> = {
  decorators: [applicationConfig({ providers: [provideRouter([])] })],
  title: 'Foundations/Cores',
  component: ColorsComponent,
  parameters: { layout: 'fullscreen' },
};
export default meta;
export const Default: StoryObj<ColorsComponent> = {};
