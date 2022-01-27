/* eslint-disable react-hooks/exhaustive-deps */
/**
 * Basic Info Form component
 */
import FormField from "components/FormElements/FormField";
import FormInputText from "components/FormElements/FormInputText";
import HelpBanner from "components/HelpBanner";
import PageDivider from "components/PageDivider";
import PageP from "components/PageElements/PageP";
import PageRow from "components/PageElements/PageRow";
import RadioButton from "components/RadioButton";
import ServicePrice from "components/ServicePrice";
import { HELP_BANNER, PageOptions } from "constants/";
import PT from "prop-types";
import React, { useEffect } from "react";
import DeviceTypes from "../DeviceTypes";
import "./styles.module.scss";

const BasicInfoForm = ({ formData, price, serviceType, onFormUpdate, numOfPages, updateNumOfPages }) => {
  const handleInputChange = (name, value, option = "") => {
    onFormUpdate({ ...formData, [name]: { ...formData[name], option, value } });
  };

  const listOptions = _.map(PageOptions, (o, i) => ({ ...o, value: i === numOfPages - 1 }));
  useEffect(() => {
    return () => {
      listOptions.forEach((option, i) => {
        option.value = false;
      });
    };
  }, []);

  return (
    <div styleName="basicInfoForm">
      <ServicePrice price={price} serviceType={serviceType} />

      <PageDivider />
      <PageRow styleName="form-row">
        <div>
          <PageP styleName="title">PROJECT TITLE</PageP>
          <PageP styleName="description">
            Give your project a descriptive title. This title is what the
            designers will see when looking for your work...
          </PageP>
        </div>

        <div styleName="formFieldWrapper">
          <FormField label={"Project Title"}>
            <FormInputText
              placeholder={"Enter a descriptive title"}
              value={formData.projectTitle.value}
              name="projectTitle"
              onChange={(e) =>
                handleInputChange(e.target.name, e.target.value, e.target.value)
              }
            />
          </FormField>
        </div>
      </PageRow>

      <PageDivider />
      <PageRow styleName="form-row">
        <div>
          <PageP styleName="title">How many pages?</PageP>
          <PageP styleName="description">
            How many pages (individual screens) would you like designed?...
          </PageP>
        </div>

        <div styleName="formFieldWrapper">
          <RadioButton
            onChange={(items, i) => {
              const newNumOfPages = _.findIndex(items, i => i.value)
              updateNumOfPages(newNumOfPages + 1)
            }}
            size="lg"
            options={listOptions}
          />
        </div>
      </PageRow>

      <PageDivider />
      <PageRow styleName="form-row">
        <div>
          <PageP styleName="title">Device Types</PageP>
          <PageP styleName="description">
            All website designs include computer size. You can add tablet and/
            or mobile device sizes as well. Designing for multiple devices sizes
            or types is referred to as Responsive Design.
          </PageP>
        </div>

        <div styleName="formFieldWrapper">
          <DeviceTypes
            selectedOptions={formData?.selectedDevice?.value}
            onSelect={(selectedOption, option) => {
              handleInputChange("selectedDevice", selectedOption, option);
            }}
          />
        </div>
      </PageRow>
      <HelpBanner
        title={HELP_BANNER.title}
        description={HELP_BANNER.description}
      />
    </div>
  );
};

BasicInfoForm.defaultProps = {
  price: 0,
  serviceType: "",
};

BasicInfoForm.propTypes = {
  price: PT.string,
  serviceType: PT.string,
  onFormUpdate: PT.func,
  formData: PT.shape(),
};

export default BasicInfoForm;
