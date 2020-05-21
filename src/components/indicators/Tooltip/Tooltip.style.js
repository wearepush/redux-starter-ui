/* eslint-disable */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const tooltipContainerStyle = (props) => css`
  background-color: white;
  border-radius: 3px;
  border: 1px solid silver;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.18);
  display: flex;
  flex-direction: column;
  margin: 0.4rem;
  padding: 0.4rem;
  transition: opacity 0.3s;
  z-index: 9999;
`;

const tooltipArrorStyle = (props) => css`
  height: 1rem;
  position: absolute;
  width: 1rem;

  &:before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    width: 0;
  }

  &:after {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    margin: auto;
    position: absolute;
    width: 0;
  }

  &[data-placement*='bottom'] {
    height: 1rem;
    left: 0;
    margin-top: -0.4rem;
    top: 0;
    width: 1rem;
  }

  &[data-placement*='bottom']::before {
    border-color: transparent transparent silver transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
    position: absolute;
    top: -1px;
  }

  &[data-placement*='bottom']::after {
    border-color: transparent transparent white transparent;
    border-width: 0 0.5rem 0.4rem 0.5rem;
  }

  &[data-placement*='top'] {
    bottom: 0;
    height: 1rem;
    left: 0;
    margin-bottom: -1rem;
    width: 1rem;
  }

  &[data-placement*='top']::before {
    border-color: silver transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
    position: absolute;
    top: 1px;
  }

  &[data-placement*='top']::after {
    border-color: white transparent transparent transparent;
    border-width: 0.4rem 0.5rem 0 0.5rem;
  }

  &[data-placement*='right'] {
    height: 1rem;
    left: 0;
    margin-left: -0.7rem;
    width: 1rem;
  }

  &[data-placement*='right']::before {
    border-color: transparent silver transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
  }

  &[data-placement*='right']::after {
    border-color: transparent white transparent transparent;
    border-width: 0.5rem 0.4rem 0.5rem 0;
    left: 6px;
    top: 0;
  }

  &[data-placement*='left'] {
    height: 1rem;
    margin-right: -0.7rem;
    right: 0;
    width: 1rem;
  }

  &[data-placement*='left']::before {
    border-color: transparent transparent transparent silver;
    border-width: 0.5rem 0 0.5rem 0.4em;
  }

  &[data-placement*='left']::after {
    border-color: transparent transparent transparent white;
    border-width: 0.5rem 0 0.5rem 0.4em;
    left: 3px;
    top: 0;
  }
`;

const tooltipTriggerStyle = (props) => css`
  display: inline-block;
`;

export const StyledTooltipContainer = styled.div`
  ${tooltipContainerStyle};
`;

export const StyledTooltipArrrow = styled.div`
  ${tooltipArrorStyle};
`;

export const StyledTooltipTrigger = styled.div`
  ${tooltipTriggerStyle};
`;

export default {
  StyledTooltipContainer,
  StyledTooltipArrrow,
  StyledTooltipTrigger,
};
