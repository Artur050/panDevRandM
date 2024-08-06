import { describe, it, expect, vi } from 'vitest';
import { shallowMount } from '@vue/test-utils';
import Characters from '../components/Characters.vue';

describe('Characters.vue', () => {
  it('renders character names and images', () => {
    const characters = [
      { id: 1, name: 'Rick', image: 'rick.jpg' },
      { id: 2, name: 'Morty', image: 'morty.jpg' }
    ];

    const wrapper = shallowMount(Characters, {
      data() {
        return {
          characters,
          currentPage: 1,
          totalPages: 1
        };
      }
    });

    expect(wrapper.text()).toContain('Rick');
    expect(wrapper.text()).toContain('Morty');

    const images = wrapper.findAll('img');
    expect(images).toHaveLength(2);
    expect(images[0].attributes('src')).toBe('rick.jpg');
    expect(images[1].attributes('src')).toBe('morty.jpg');
  });

  it('handles pagination buttons', async () => {
    const wrapper = shallowMount(Characters, {
      data() {
        return {
          characters: [],
          currentPage: 1,
          totalPages: 2
        };
      }
    });

    expect(wrapper.find('button:disabled').text()).toBe('←');

    await wrapper.find('button:nth-of-type(2)').trigger('click');

    expect(wrapper.vm.currentPage).toBe(2);

    await wrapper.find('button:first-of-type').trigger('click');

    expect(wrapper.vm.currentPage).toBe(1);
  });
});
