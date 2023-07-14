<template>
  <header class="bg-dark mb-4">
    <BContainer>
      <BRow align-v="center">
        <BCol>
          <BNavbarBrand class="me-1 me-sm-3">
            <BImg fluid
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Newspaper_Cover.svg/2048px-Newspaper_Cover.svg.png"
                  width="80"/>
          </BNavbarBrand>
        </BCol>
        <BCol col>
          <BForm class="d-none d-md-inline-block me-auto">
            <div class="input-group input-group-merge">
              <input
                type="text"
                class="form-control bg-light-green border-light-green w-250px"
                placeholder="Search..."
                aria-label="Search for any term"
              />
            </div>
          </BForm>
        </BCol>

        <BCol cols="auto">
          <BDropdown
            no-caret
            size="sm"
            toggle-class="text-decoration-none"
            variant="link">
            <template #button-content>
              <div class="avatar avatar-circle avatar-sm avatar-online">
                <BAvatar class="avatar-img avatar-lg rounded-circle" size="40px"/>
              </div>
            </template>
            <BDropdownItem>
              <span>Log In</span>
            </BDropdownItem>
            <BDropdownItem>
              <span>Log Out</span>
            </BDropdownItem>
          </BDropdown>
        </BCol>
      </BRow>
    </BContainer>
  </header>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({components: {}})
export default class TheHeader extends Vue {

}
</script>
